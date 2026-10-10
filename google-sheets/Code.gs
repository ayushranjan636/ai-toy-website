/**
 * Zivoo — pre-order waitlist receiver (Google Apps Script)
 * ---------------------------------------------------------
 * Paste this into Extensions → Apps Script on the Google Sheet that should
 * hold the waitlist, then follow the setup steps in README.md.
 *
 * Security model
 *  - Only the website's server knows WAITLIST_SECRET (Script Properties).
 *    Requests without it are rejected, so the public URL alone is useless.
 *  - A script lock serialises writes, so two sign-ups can't race each other
 *    and the duplicate check stays reliable.
 *  - Values are written as plain text, so a cell starting with "=" can never
 *    run as a formula (CSV/formula injection).
 */

const SHEET_NAME = "Waitlist";
const HEADERS = ["Created at (UTC)", "Email", "First name", "Marketing consent", "Consent text", "Source"];

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const secret = PropertiesService.getScriptProperties().getProperty("WAITLIST_SECRET");

    if (!secret || body.secret !== secret) return json({ status: "unauthorized" });
    if (body.action === "ping") return json({ status: "ok", sheet: SHEET_NAME });

    const email = String(body.email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
      return json({ status: "invalid" });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = getSheet();
      const last = sheet.getLastRow();
      if (last > 1) {
        const found = sheet
          .getRange(2, 2, last - 1, 1)
          .createTextFinder(email)
          .matchEntireCell(true)
          .matchCase(false)
          .findNext();
        if (found) return json({ status: "duplicate" });
      }

      const row = [
        new Date().toISOString(),
        email,
        String(body.firstName || "").slice(0, 60),
        body.marketingConsent === true ? "Yes" : "No",
        body.marketingConsent === true ? String(body.consentText || "").slice(0, 300) : "",
        String(body.source || "website").slice(0, 80),
      ];
      const target = sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length);
      target.setNumberFormat("@"); // plain text — never evaluated as a formula
      target.setValues([row]);
      return json({ status: "created" });
    } finally {
      lock.releaseLock();
    }
  } catch (err) {
    return json({ status: "error", message: String(err).slice(0, 200) });
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

"use client";

import { useEffect, useState } from "react";

type Platform = "ios" | "android" | "other";

/** Puts the visitor's own phone first; both options are always shown. */
export function AppDownloads({ androidHref, androidSize }: { androidHref: string; androidSize: string }) {
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    const ua = navigator.userAgent;
    // iPadOS reports itself as a Mac; touch support tells them apart.
    const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    setPlatform(ios ? "ios" : /Android/.test(ua) ? "android" : "other");
  }, []);

  const android = (
    <div className={`download-card${platform === "android" ? " is-yours" : ""}`} key="android">
      <p className="download-os">Android</p>
      <h3>Zivoo for Android</h3>
      <p className="download-note">Android 7 or later · {androidSize}</p>
      <a className="btn btn-primary btn-block" href={androidHref} download="Zivoo.apk">
        Download for Android
      </a>
      <details className="download-help">
        <summary>How to install</summary>
        <ol>
          <li>Tap <strong>Download for Android</strong>, then open the downloaded file.</li>
          <li>
            If asked, allow your browser to <strong>install unknown apps</strong> (Settings opens for you). This is
            only needed until Zivoo is on Google Play.
          </li>
          <li>Tap <strong>Install</strong>, then <strong>Open</strong>.</li>
        </ol>
      </details>
    </div>
  );

  const ios = (
    <div className={`download-card is-soon${platform === "ios" ? " is-yours" : ""}`} key="ios">
      <p className="download-os">iPhone</p>
      <h3>Zivoo for iPhone</h3>
      <p className="download-note">Coming soon to the App Store</p>
      <span className="btn btn-secondary btn-block" aria-disabled="true">
        Coming soon
      </span>
      <p className="download-help-text">
        Using an iPhone? Set Zivoo up with any Android phone in the family for now; your iPhone can join the same
        account as soon as the app is out.
      </p>
    </div>
  );

  return (
    <div className="download-grid" data-platform={platform}>
      {platform === "ios" ? [ios, android] : [android, ios]}
    </div>
  );
}

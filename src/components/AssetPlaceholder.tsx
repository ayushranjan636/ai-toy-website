type Props = {
  /** e.g. "4 / 3" */
  ratio: string;
  /** What the final image should show — visible so reviewers know what's missing. */
  label: string;
  note?: string;
  className?: string;
  tone?: "cream" | "mint";
};

/**
 * Neutral stand-in for photography we don't have yet. It keeps the final
 * aspect ratio so the layout won't shift when the real image arrives, and it
 * is clearly marked as a placeholder rather than pretending to be a photo.
 */
export function AssetPlaceholder({ ratio, label, note, className, tone = "cream" }: Props) {
  return (
    <div
      className={`asset-placeholder asset-placeholder-${tone} ${className ?? ""}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${label}. Photograph not yet available.`}
    >
      <div className="asset-placeholder-inner" aria-hidden="true">
        <span className="asset-placeholder-tag">Photo to come</span>
        <span className="asset-placeholder-label">{label}</span>
        {note ? <span className="asset-placeholder-note">{note}</span> : null}
      </div>
    </div>
  );
}

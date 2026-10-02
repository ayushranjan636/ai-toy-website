import Image from "next/image";
import Link from "next/link";

type Props = {
  width?: number;
  priority?: boolean;
  className?: string;
  /** "dark" for light backgrounds (header), "light" for the teal footer. */
  variant?: "dark" | "light";
};

const logos = {
  dark: { src: "/images/zivoo-logo-dark.png", w: 1638, h: 577 },
  light: { src: "/images/zivoo-logo-light.png", w: 1805, h: 642 },
} as const;

/** The supplied Zivoo logo, unaltered (only transparent padding trimmed). */
export function Logo({ width = 120, priority, className, variant = "dark" }: Props) {
  const logo = logos[variant];
  const height = Math.round((width * logo.h) / logo.w);
  return (
    <Link href="/" className={`logo-link ${className ?? ""}`} aria-label="Zivoo — home">
      <Image src={logo.src} alt="" width={width} height={height} priority={priority} sizes={`${width}px`} quality={90} style={{ height: "auto" }} />
    </Link>
  );
}

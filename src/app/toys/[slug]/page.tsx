import { notFound } from "next/navigation";
import { LandingView, landingMetadata } from "@/components/LandingView";
import { getLanding, landingsOf } from "@/content/landing";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingsOf("toys").map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/toys/[slug]">) {
  const { slug } = await params;
  const l = getLanding("toys", slug);
  return l ? landingMetadata(l) : {};
}

export default async function ToyGuidePage({ params }: PageProps<"/toys/[slug]">) {
  const { slug } = await params;
  const l = getLanding("toys", slug);
  if (!l) notFound();
  return <LandingView landing={l} />;
}

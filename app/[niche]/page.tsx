import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNicheConfig, getAllNiches } from "@/config";
import { LandingPage } from "@/components/LandingPage";

interface NichePageProps {
  params: Promise<{ niche: string }>;
}

export async function generateStaticParams() {
  const niches = getAllNiches();
  // Exclude 'coaches' since it's the default at /
  return niches
    .filter((niche) => niche !== "coaches")
    .map((niche) => ({ niche }));
}

export async function generateMetadata({
  params,
}: NichePageProps): Promise<Metadata> {
  const { niche } = await params;
  const config = getNicheConfig(niche);

  if (!config) {
    return { title: "Not Found" };
  }

  return {
    title: config.seo.title,
    description: config.seo.description,
    keywords: config.seo.keywords.join(", "),
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      images: config.seo.ogImage ? [config.seo.ogImage] : [],
    },
  };
}

export default async function NichePage({ params }: NichePageProps) {
  const { niche } = await params;
  const config = getNicheConfig(niche);

  if (!config) {
    notFound();
  }

  return <LandingPage config={config} />;
}

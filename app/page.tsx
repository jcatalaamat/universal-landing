import { Metadata } from "next";
import { getDefaultConfig } from "@/config";
import { LandingPage } from "@/components/LandingPage";

export async function generateMetadata(): Promise<Metadata> {
  const config = getDefaultConfig();
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

export default function HomePage() {
  const config = getDefaultConfig();
  return <LandingPage config={config} />;
}

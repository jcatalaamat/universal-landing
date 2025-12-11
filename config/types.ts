// ============================================
// CTA CONFIGURATION
// ============================================
export interface CTAConfig {
  text: string;
  href: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  icon?: string;
}

// ============================================
// THEME CONFIGURATION
// ============================================
export interface ThemeConfig {
  name: string;
  style: "minimal" | "bold" | "elegant" | "playful" | "corporate";
}

// ============================================
// SEO CONFIGURATION
// ============================================
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

// ============================================
// NAVIGATION CONFIGURATION
// ============================================
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavConfig {
  logo: {
    text: string;
    image?: string;
  };
  links: NavLink[];
  cta?: CTAConfig;
}

// ============================================
// FOOTER CONFIGURATION
// ============================================
export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  platform: "twitter" | "facebook" | "instagram" | "linkedin" | "youtube";
  href: string;
}

export interface FooterConfig {
  logo?: {
    text: string;
    image?: string;
  };
  tagline?: string;
  columns: FooterColumn[];
  socialLinks?: SocialLink[];
  copyright: string;
}

// ============================================
// HERO CONFIGURATION
// ============================================
export interface TrustBadge {
  icon: string;
  text: string;
}

export interface HeroConfig {
  headline: string;
  subheadline: string;
  cta: CTAConfig;
  secondaryCta?: CTAConfig;
  backgroundImage?: string;
  layout: "centered" | "left-aligned" | "split";
  showTrustBadges?: boolean;
  trustBadges?: TrustBadge[];
}

// ============================================
// PROBLEM SECTION CONFIGURATION
// ============================================
export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProblemConfig {
  enabled: boolean;
  sectionTitle: string;
  sectionSubtitle?: string;
  problems: ProblemItem[];
  layout: "grid" | "list" | "alternating";
}

// ============================================
// SOLUTION SECTION CONFIGURATION
// ============================================
export interface SolutionItem {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface SolutionConfig {
  enabled: boolean;
  sectionTitle: string;
  sectionSubtitle?: string;
  solutions: SolutionItem[];
  layout: "grid-3" | "grid-4" | "carousel";
}

// ============================================
// HOW IT WORKS CONFIGURATION
// ============================================
export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  icon?: string;
}

export interface HowItWorksConfig {
  enabled: boolean;
  sectionTitle: string;
  sectionSubtitle?: string;
  steps: HowItWorksStep[];
  layout: "horizontal" | "vertical" | "timeline";
}

// ============================================
// USE CASES CONFIGURATION
// ============================================
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  image?: string;
  testimonial?: Testimonial;
}

export interface UseCasesConfig {
  enabled: boolean;
  sectionTitle: string;
  sectionSubtitle?: string;
  useCases: UseCaseItem[];
}

// ============================================
// PRICING CONFIGURATION
// ============================================
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: CTAConfig;
  highlighted?: boolean;
  badge?: string;
}

export interface PricingConfig {
  enabled: boolean;
  sectionTitle: string;
  sectionSubtitle?: string;
  plans: PricingPlan[];
}

// ============================================
// FAQ CONFIGURATION
// ============================================
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  enabled: boolean;
  sectionTitle: string;
  sectionSubtitle?: string;
  faqs: FAQItem[];
}

// ============================================
// FINAL CTA CONFIGURATION
// ============================================
export interface FinalCTAConfig {
  enabled: boolean;
  headline: string;
  subheadline?: string;
  cta: CTAConfig;
  secondaryCta?: CTAConfig;
  backgroundStyle: "gradient" | "solid" | "image";
}

// ============================================
// COMPLETE NICHE CONFIG
// ============================================
export interface NicheConfig {
  slug: string;
  theme: ThemeConfig;
  seo: SEOConfig;
  nav: NavConfig;
  hero: HeroConfig;
  problem: ProblemConfig;
  solution: SolutionConfig;
  howItWorks: HowItWorksConfig;
  useCases: UseCasesConfig;
  pricing: PricingConfig;
  faq: FAQConfig;
  finalCta: FinalCTAConfig;
  footer: FooterConfig;
}

// ============================================
// NICHE REGISTRY
// ============================================
export type NicheSlug =
  | "coaches"
  | "studios"
  | "healers"
  | "localbiz"
  | "influencers";

export const VALID_NICHES: NicheSlug[] = [
  "coaches",
  "studios",
  "healers",
  "localbiz",
  "influencers",
];

export function isValidNiche(slug: string): slug is NicheSlug {
  return VALID_NICHES.includes(slug as NicheSlug);
}

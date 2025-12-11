import { NicheConfig } from "./types";

export const coachesConfig: NicheConfig = {
  slug: "coaches",
  theme: {
    name: "Coaches Theme",
    style: "minimal",
  },
  seo: {
    title: "Transform Your Coaching Business | CoachPro",
    description:
      "The all-in-one platform for coaches to manage clients, schedule sessions, and grow their practice with AI-powered tools.",
    keywords: [
      "coaching platform",
      "life coach software",
      "coaching business",
      "client management",
      "AI coaching tools",
    ],
    ogImage: "/og/coaches.jpg",
  },
  nav: {
    logo: { text: "CoachPro" },
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "Scale Your Coaching Practice Without Burning Out",
    subheadline:
      "The all-in-one platform that handles scheduling, payments, and client management so you can focus on what you do best: coaching.",
    cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Watch Demo", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "⭐", text: "4.9/5 from 500+ coaches" },
      { icon: "🔒", text: "SOC 2 Compliant" },
      { icon: "💳", text: "No credit card required" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "Sound Familiar?",
    sectionSubtitle:
      "These challenges hold back most coaches from reaching their full potential.",
    problems: [
      {
        icon: "📅",
        title: "Scheduling Chaos",
        description:
          "Endless back-and-forth emails to book a single session. Time zones, cancellations, no-shows eating into your time.",
      },
      {
        icon: "💸",
        title: "Payment Headaches",
        description:
          "Chasing invoices, managing subscriptions, and dealing with failed payments instead of coaching.",
      },
      {
        icon: "📊",
        title: "No Clear Visibility",
        description:
          "No clear picture of your business health, client progress, or revenue trends to make smart decisions.",
      },
      {
        icon: "🔄",
        title: "Manual Follow-ups",
        description:
          "Spending hours on homework reminders, session summaries, and client check-ins that could be automated.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "Everything You Need to Thrive",
    sectionSubtitle: "One platform. Zero complexity. Maximum impact.",
    solutions: [
      {
        icon: "📅",
        title: "Smart Scheduling",
        description:
          "Clients book directly from your availability. Automatic reminders eliminate no-shows.",
      },
      {
        icon: "💳",
        title: "Effortless Payments",
        description:
          "Accept payments, manage packages, and automate invoices with one click.",
      },
      {
        icon: "📈",
        title: "Client Portal",
        description:
          "Branded portal for resources, progress tracking, homework, and seamless communication.",
      },
      {
        icon: "🤖",
        title: "AI Session Summaries",
        description:
          "Automatic session notes and insights so you can focus on coaching, not admin.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Get Started in 3 Simple Steps",
    sectionSubtitle: "You'll be up and running in under 10 minutes.",
    steps: [
      {
        stepNumber: 1,
        title: "Create Your Profile",
        description:
          "Set up your coaching profile, services, and availability in minutes. Import existing clients if you have them.",
        icon: "👤",
      },
      {
        stepNumber: 2,
        title: "Share Your Link",
        description:
          "Send your personalized booking link to clients. They book, pay, and you're notified instantly.",
        icon: "🔗",
      },
      {
        stepNumber: 3,
        title: "Start Coaching",
        description:
          "Focus on transforming lives. We handle scheduling, payments, reminders, and follow-ups automatically.",
        icon: "🚀",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for Every Type of Coach",
    sectionSubtitle: "From life coaches to executive coaches, we've got you covered.",
    useCases: [
      {
        title: "Life Coaches",
        description:
          "Transform personal development journeys with structured programs, progress tracking, and automated homework delivery.",
        testimonial: {
          quote:
            "I doubled my client base in 3 months without working more hours. The automation is a game-changer.",
          author: "Sarah M.",
          role: "Life Coach, 7 years experience",
        },
      },
      {
        title: "Executive Coaches",
        description:
          "Deliver high-touch experiences for corporate clients with branded portals and professional invoicing.",
        testimonial: {
          quote:
            "My clients love the professional portal. It elevated my entire practice.",
          author: "James K.",
          role: "Executive Coach",
        },
      },
      {
        title: "Health & Wellness Coaches",
        description:
          "Track progress, share resources, celebrate wins, and keep clients accountable between sessions.",
        testimonial: {
          quote:
            "The analytics help me show clients their real progress. Retention is up 40%.",
          author: "Dr. Lisa T.",
          role: "Health Coach",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Simple, Transparent Pricing",
    sectionSubtitle: "Start free. Upgrade when you're ready. No surprises.",
    plans: [
      {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "Perfect for new coaches just getting started",
        features: [
          "Up to 5 active clients",
          "Basic scheduling",
          "Payment processing (2.9% + 30¢)",
          "Email support",
        ],
        cta: { text: "Get Started Free", href: "#signup", variant: "outline" },
      },
      {
        name: "Professional",
        price: "$49",
        period: "/month",
        description: "For coaches ready to scale their practice",
        features: [
          "Unlimited clients",
          "Advanced scheduling with packages",
          "Client portal with branding",
          "AI session summaries",
          "Analytics dashboard",
          "Priority support",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For coaching organizations and teams",
        features: [
          "Everything in Professional",
          "Team management",
          "Custom integrations",
          "Dedicated success manager",
          "Custom SLA",
          "White-label options",
        ],
        cta: { text: "Contact Sales", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Frequently Asked Questions",
    sectionSubtitle: "Got questions? We've got answers.",
    faqs: [
      {
        question: "How long is the free trial?",
        answer:
          "14 days with full access to Professional features. No credit card required to start.",
      },
      {
        question: "Can I migrate from another platform?",
        answer:
          "Yes! Our team will help you migrate all your data, clients, and history for free. Most migrations take under 24 hours.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Absolutely. We're SOC 2 compliant with enterprise-grade encryption. Your data and your clients' data is protected with bank-level security.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes, no contracts or commitments. Cancel with one click, no questions asked. We'll even help you export your data.",
      },
      {
        question: "Do you integrate with Zoom/Google Meet?",
        answer:
          "Yes! We integrate with Zoom, Google Meet, and Microsoft Teams. Meeting links are automatically added to calendar invites.",
      },
      {
        question: "What payment methods do you support?",
        answer:
          "We support all major credit cards, ACH transfers, and can handle recurring payments for packages and subscriptions.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Ready to Transform Your Coaching Business?",
    subheadline:
      "Join 500+ coaches who scaled their practice with CoachPro. Start your free trial today.",
    cta: { text: "Start Your Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: {
      text: "Schedule a Demo",
      href: "#demo",
      variant: "outline",
    },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "CoachPro" },
    tagline: "The modern platform for modern coaches.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Integrations", href: "#integrations" },
          { label: "API", href: "#api" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
          { label: "Press", href: "/press" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/help" },
          { label: "Contact", href: "/contact" },
          { label: "Status", href: "/status" },
          { label: "Security", href: "/security" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Cookie Policy", href: "/cookies" },
        ],
      },
    ],
    socialLinks: [
      { platform: "twitter", href: "https://twitter.com/coachpro" },
      { platform: "linkedin", href: "https://linkedin.com/company/coachpro" },
      { platform: "youtube", href: "https://youtube.com/@coachpro" },
    ],
    copyright: "© 2024 CoachPro. All rights reserved.",
  },
};

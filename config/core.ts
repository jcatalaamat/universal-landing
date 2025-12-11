import { NicheConfig } from "./types";

export const coreConfig: NicheConfig = {
  slug: "core",
  theme: {
    name: "Astral Integration",
    style: "elegant",
  },
  seo: {
    title: "AI Systems for Teachers, Coaches & Transformational Businesses | Astral Integration",
    description:
      "Custom platforms, client portals, automations, and AI assistants for those who teach, guide, heal, and transform. Built by someone who understands your work.",
    keywords: [
      "AI systems for coaches",
      "coaching platform",
      "client portal",
      "automation for healers",
      "transformational business",
      "AI assistant",
      "spiritual business technology",
    ],
    ogImage: "/og/astral.jpg",
  },
  nav: {
    logo: { text: "Astral Integration" },
    links: [
      { label: "Services", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { text: "Book a Call", href: "#contact", variant: "primary" },
  },
  hero: {
    headline: "AI Systems for Teachers, Coaches & Transformational Businesses",
    subheadline:
      "Custom platforms, client portals, automations, and AI assistants for those who teach, guide, heal, and transform.",
    cta: { text: "Request an AI Blueprint Call", href: "#contact", variant: "primary" },
    secondaryCta: { text: "See Demo", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🧘", text: "Built for transformational work" },
      { icon: "🤖", text: "AI-powered systems" },
      { icon: "🔧", text: "Custom, not cookie-cutter" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "Your Work Is Transformational. Your Systems… Not So Much.",
    sectionSubtitle:
      "You've mastered your craft. But your digital infrastructure is holding you back.",
    problems: [
      {
        icon: "🔀",
        title: "Scattered Tools",
        description:
          "Booking here, payments there, notes in Google Docs, clients in WhatsApp. Nothing talks to each other.",
      },
      {
        icon: "⏰",
        title: "Manual Everything",
        description:
          "You're chasing invoices, reminders, follow-ups, and onboarding instead of actually guiding people.",
      },
      {
        icon: "🚪",
        title: "No Proper Client Journey",
        description:
          "Clients love your work, but their digital experience feels messy, outdated, or confusing.",
      },
      {
        icon: "🤖",
        title: "No Use of AI",
        description:
          "You know AI could save you hours, but you don't have the time or clarity to implement it properly.",
      },
      {
        icon: "📈",
        title: "Zero Space to Scale",
        description:
          "You can't grow because your backend breaks the moment more people show up.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "One Intelligent System Behind Your Entire Practice",
    sectionSubtitle:
      "Everything connected. Everything automated. Everything aligned with how you actually work.",
    solutions: [
      {
        icon: "🏛️",
        title: "Custom Client & Student Portals",
        description:
          "Branded spaces where your clients can view sessions, notes, resources, and action steps — fully aligned with your way of working.",
      },
      {
        icon: "🧠",
        title: "AI-Powered Coaching & Teaching Support",
        description:
          "Session summaries, suggested homework, integration prompts and insights — generated from your own style and methodology.",
      },
      {
        icon: "⚡",
        title: "Automated Operations & Flows",
        description:
          "Onboarding, scheduling, reminders, payments, and follow-up sequences that run without you lifting a finger.",
      },
      {
        icon: "💬",
        title: "WhatsApp & Messaging Integrations",
        description:
          "Smart automations and assistants that live where your people already are — WhatsApp, email, or your preferred channels.",
      },
      {
        icon: "📊",
        title: "Dashboards for Clarity",
        description:
          "Simple, elegant dashboards that show you clients, programs, revenue, and progress at a glance.",
      },
      {
        icon: "✨",
        title: "Designed for Transformational Work",
        description:
          "Not just 'business software' — systems built with sensitivity to the emotional, spiritual, and developmental nature of your work.",
      },
    ],
    layout: "grid-3",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "How We Work Together",
    sectionSubtitle:
      "A clear process from vision to running system.",
    steps: [
      {
        stepNumber: 1,
        title: "AI Systems Blueprint",
        description:
          "We map your entire practice — offers, clients, tools, problems, and possibilities — and design your ideal architecture.",
        icon: "📐",
      },
      {
        stepNumber: 2,
        title: "Custom Build & Integration",
        description:
          "We design and assemble your platform, automations, and AI features, integrating the tools you already use where it makes sense.",
        icon: "🔧",
      },
      {
        stepNumber: 3,
        title: "Launch & Evolution",
        description:
          "You start using your new system. We iterate, refine, and evolve it as your work and community grow.",
        icon: "🚀",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for Different Kinds of Teachers & Transformational Leaders",
    sectionSubtitle:
      "Whether you work 1:1, run programs, or lead a school — there's a system for you.",
    useCases: [
      {
        title: "The Coach or Therapist",
        description:
          "One place for clients, sessions, notes, and follow-ups — with AI helping you save time on admin.",
        testimonial: {
          quote:
            "I want a system that handles the business side so I can focus on my clients.",
          author: "Every Coach",
          role: "Ever",
        },
      },
      {
        title: "The Spiritual Teacher or School",
        description:
          "A digital home for your teachings — courses, community, quests, live programs — that feels like an extension of your temple.",
        testimonial: {
          quote:
            "I need something that honors the depth of the work, not just another course platform.",
          author: "Wisdom Keepers",
          role: "Everywhere",
        },
      },
      {
        title: "The Retreat Center or Studio",
        description:
          "People come for powerful in-person experiences. You need systems for bookings, follow-ups, integration, and ongoing learning.",
        testimonial: {
          quote:
            "The experience doesn't end when they leave — we need to stay connected.",
          author: "Retreat Leaders",
          role: "Worldwide",
        },
      },
      {
        title: "The Conscious Creator or Educator",
        description:
          "You share deep knowledge and content. Turn it into structured programs, memberships, and personalized learning pathways.",
        testimonial: {
          quote:
            "I have so much content but no system to deliver it properly.",
          author: "Content Creators",
          role: "With Purpose",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Ways to Work Together",
    sectionSubtitle:
      "From strategy to full implementation — choose what fits your stage.",
    plans: [
      {
        name: "Blueprint",
        price: "From €500",
        period: "",
        description: "A focused strategy & systems design engagement",
        features: [
          "90–120 min deep-dive session",
          "Full map of your ideal digital ecosystem",
          "AI & automation opportunities identified",
          "Clear phased implementation plan",
          "Recording & written summary",
        ],
        cta: { text: "Book a Blueprint Call", href: "#contact", variant: "outline" },
      },
      {
        name: "Custom System Build",
        price: "Custom",
        period: "",
        description: "Done-for-you implementation of your AI-powered platform",
        features: [
          "Custom portal or platform design",
          "Automations, booking, payments, flows",
          "Integrations with your existing tools",
          "AI features tailored to your methodology",
          "Launch support & training",
        ],
        cta: { text: "Apply for a Build", href: "#contact", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Evolution Partnership",
        price: "Ongoing",
        period: "",
        description: "Ongoing systems leadership for those ready to expand",
        features: [
          "Monthly systems & strategy support",
          "Continuous improvements & new features",
          "Priority for new experiments & AI tools",
          "Ideal for schools, platforms, and large ecosystems",
          "Direct access & collaboration",
        ],
        cta: { text: "Request Partnership Info", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Questions You Might Have",
    sectionSubtitle: "Real answers to real concerns.",
    faqs: [
      {
        question: "Do I have to be 'techy' for this to work?",
        answer:
          "Not at all. You bring your teachings, offers, and preferences. I handle the architecture, tools, integrations, and builds — in language you can actually understand.",
      },
      {
        question: "What tools do you use?",
        answer:
          "It depends on your needs. I often work with Next.js, Vercel, n8n, WhatsApp automation, Stripe, Airtable/Supabase, and AI models like Claude and GPT — but the stack is always chosen to fit you, not the other way around.",
      },
      {
        question: "Can you work with our existing website / platform?",
        answer:
          "Yes. In many cases, we keep what's already working and simply build an intelligent layer around it — client portals, automations, AI support — instead of forcing you to start from zero.",
      },
      {
        question: "Do you only work with spiritual / transformational work?",
        answer:
          "My focus is on teachers, guides, coaches, healers, and businesses that support human development. If your work transforms people in some way, we're likely a fit.",
      },
      {
        question: "What does a typical project timeline look like?",
        answer:
          "A Blueprint can be completed within 1–2 weeks. A custom system build usually runs 3–8 weeks depending on scope. Evolution Partnerships are ongoing.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Ready for an Intelligent System Behind Your Work?",
    subheadline:
      "Tell me where your mission is going. I'll architect the systems that help you carry it there.",
    cta: { text: "Request an AI Blueprint Call", href: "#contact", variant: "primary" },
    secondaryCta: { text: "Explore Collaboration", href: "#pricing", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "Astral Integration" },
    tagline: "AI systems for those who transform lives.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Blueprint", href: "#pricing" },
          { label: "Custom Builds", href: "#pricing" },
          { label: "Partnerships", href: "#pricing" },
        ],
      },
      {
        title: "For",
        links: [
          { label: "Coaches", href: "/coaches" },
          { label: "Studios", href: "/studios" },
          { label: "Healers", href: "/healers" },
          { label: "Creators", href: "/influencers" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Book a Call", href: "#contact" },
          { label: "Email", href: "mailto:hello@astralintegration.com" },
        ],
      },
    ],
    socialLinks: [
      { platform: "linkedin", href: "https://linkedin.com/in/jcatalaamat" },
      { platform: "twitter", href: "https://twitter.com/jcatalaamat" },
    ],
    copyright: "© 2024 Astral Integration. All rights reserved.",
  },
};

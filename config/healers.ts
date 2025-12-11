import { NicheConfig } from "./types";

export const healersConfig: NicheConfig = {
  slug: "healers",
  theme: {
    name: "Healers Theme",
    style: "elegant",
  },
  seo: {
    title: "A Digital Home for Your Healing Work | SacredSpace",
    description:
      "The platform built by healers, for healers. Membership portals, integration support, ceremony management, and aligned commerce — so your medicine can reach more souls without losing its essence.",
    keywords: [
      "healer platform",
      "spiritual teacher software",
      "energy healing business",
      "ceremony facilitation tools",
      "integration coaching platform",
      "conscious business technology",
    ],
    ogImage: "/og/healers.jpg",
  },
  nav: {
    logo: { text: "SacredSpace" },
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { text: "Begin Your Journey", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "Your Medicine Deserves a Vessel Worthy of Its Depth",
    subheadline:
      "SacredSpace holds the business side of healing — memberships, integration, scheduling, payments — so you can stay fully present in your gift. Technology in service of spirit.",
    cta: { text: "Create Your Sacred Space", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See How It Works", href: "#features", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🌿", text: "Created by practitioners, for practitioners" },
      { icon: "🔮", text: "Trauma-informed design throughout" },
      { icon: "🌍", text: "Serving healers worldwide" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "You Hold Space for Everyone. Who Holds Space for Your Practice?",
    sectionSubtitle:
      "The paradox of healing work: the more people you serve, the more the business side threatens to pull you from your gift.",
    problems: [
      {
        icon: "⚖️",
        title: "Sacred Work, Scattered Systems",
        description:
          "You spent years cultivating your gifts. Now you spend hours on scheduling, invoices, and email. The admin never rests, even when you desperately need to.",
      },
      {
        icon: "🌊",
        title: "Integration Left to Chance",
        description:
          "Participants leave ceremony transformed — then struggle alone. You feel the call to support them, but you can't scale presence. The most critical phase gets the least structure.",
      },
      {
        icon: "🏝️",
        title: "Community Without Container",
        description:
          "Your people are scattered across WhatsApp, email, Instagram, and random platforms. There's no cohesive space where your tribe can gather, connect, and grow together.",
      },
      {
        icon: "💫",
        title: "The Money Wound",
        description:
          "Pricing feels heavy. Asking for fair exchange triggers guilt. You oscillate between undercharging and avoidance — and your practice suffers financially while your gifts remain undervalued.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "Technology as Offering",
    sectionSubtitle: "Systems that serve the sacred — never the other way around.",
    solutions: [
      {
        icon: "🤖",
        title: "AI Integration Companion",
        description:
          "Your participants receive personalized integration support between sessions — grounding practices, journaling prompts, wisdom from your teachings. Available when they need it, trained in your voice.",
      },
      {
        icon: "🏛️",
        title: "Your Digital Temple",
        description:
          "A beautiful, private space for your community. Courses, meditations, live circles, and resources — all gathered in one sacred container that reflects the depth of your work.",
      },
      {
        icon: "📿",
        title: "Ceremony Flow",
        description:
          "Applications, screening, preparation materials, and follow-up — all automated with care. The logistics handled with reverence, so you can hold the space that matters.",
      },
      {
        icon: "💎",
        title: "Aligned Exchange",
        description:
          "Sliding scale options. Payment plans. Energy exchange possibilities. A commerce system built for abundance without compromise — so money becomes ally, not obstacle.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Three Steps to Sovereign Practice",
    sectionSubtitle: "Simple setup. Profound impact.",
    steps: [
      {
        stepNumber: 1,
        title: "Design Your Temple",
        description:
          "Upload your teachings. Create your offerings. Shape your community space. We guide you through every step — no technical background needed.",
        icon: "🏛️",
      },
      {
        stepNumber: 2,
        title: "Invite Your People",
        description:
          "Open the doors to your community. Participants access everything — courses, resources, ceremonies, connection — in one sacred container.",
        icon: "🤝",
      },
      {
        stepNumber: 3,
        title: "Serve at Scale",
        description:
          "AI supports integration. Automation handles logistics. You remain fully present for the moments that require your medicine — ceremony, teaching, deep work.",
        icon: "✨",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "For Every Path of Healing",
    sectionSubtitle: "Whether you guide ceremonies, teach wisdom, or hold space for transformation.",
    useCases: [
      {
        title: "Ceremony Facilitators",
        description:
          "From application to integration — the full journey supported. Screening, preparation, payment, follow-up, and ongoing integration all flow seamlessly while you focus on the sacred work.",
        testimonial: {
          quote:
            "The integration companion changed everything. Participants feel held between ceremonies, and I finally have space to rest. My capacity doubled without my presence being diluted.",
          author: "Maria Celestina",
          role: "Plant Medicine Facilitator, Costa Rica",
        },
      },
      {
        title: "Wisdom Teachers",
        description:
          "Deliver courses, host live teachings, and build community around your lineage. Your wisdom transmission gains structure without losing soul.",
        testimonial: {
          quote:
            "I went from scattered PDFs and disconnected Zoom links to a cohesive learning journey. My students stay longer, go deeper, and refer others. The container holds.",
          author: "Ram Dass Kapoor",
          role: "Meditation & Vedanta Teacher",
        },
      },
      {
        title: "Energy Workers & Bodyworkers",
        description:
          "Booking, intake forms, pre-session preparation, and post-session integration — automated with sensitivity. Your clients feel held before they even arrive.",
        testimonial: {
          quote:
            "The sliding scale feature lets me serve those called to the work regardless of means. Real abundance — full practice, diverse community, sustainable income.",
          author: "Luna Brightheart",
          role: "Reiki Master & Sound Healer",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "An Investment in Your Impact",
    sectionSubtitle: "Pricing rooted in abundance. Options for every stage of practice.",
    plans: [
      {
        name: "Seedling",
        price: "$0",
        period: "/month",
        description: "For healers planting first roots",
        features: [
          "Basic membership portal",
          "Up to 25 community members",
          "Simple scheduling + booking",
          "Payment processing",
          "Email support",
        ],
        cta: { text: "Plant Your Seed", href: "#signup", variant: "outline" },
      },
      {
        name: "Flowering",
        price: "$67",
        period: "/month",
        description: "For practices ready to bloom",
        features: [
          "Full-featured portal + community",
          "Unlimited members",
          "AI integration companion",
          "Course + program hosting",
          "Ceremony management flow",
          "Sliding scale + payment plans",
          "Priority support from practitioners",
        ],
        cta: { text: "Begin Flowering", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Chosen",
      },
      {
        name: "Fruiting",
        price: "$197",
        period: "/month",
        description: "For centers, schools + organizations",
        features: [
          "Everything in Flowering",
          "Multiple facilitators + teachers",
          "Custom AI training on your methods",
          "White-label portal option",
          "Advanced analytics + insights",
          "Dedicated practitioner support",
        ],
        cta: { text: "Let's Connect", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Questions from the Heart",
    sectionSubtitle: "We understand the unique nature of this work. Here's what healers ask most.",
    faqs: [
      {
        question: "Is this appropriate for sacred and ceremonial work?",
        answer:
          "We built SacredSpace specifically for this purpose. Every feature was designed with trauma-informed principles and deep respect for the sacred. Nothing feels corporate, clinical, or extractive. The technology disappears — what remains is your work, held well.",
      },
      {
        question: "How does the AI integration companion actually work?",
        answer:
          "It's trained on your teachings, your integration philosophy, your voice. Participants can chat with it for grounding practices, journaling prompts, and support between sessions. You review conversations and can intervene anytime. It extends your presence without replacing it.",
      },
      {
        question: "Can I truly offer sliding scale and energy exchange?",
        answer:
          "Yes — this was essential to us. Set your suggested price, your minimum, and your maximum. Offer payment plans over months. Create work-exchange arrangements. The system tracks everything cleanly. Abundance and accessibility, together.",
      },
      {
        question: "How do you handle participant privacy and confidentiality?",
        answer:
          "With the gravity it deserves. All data encrypted in transit and at rest. We never share or sell information. You control exactly what's collected. HIPAA-compliant options available. Trust is the foundation — we don't compromise it.",
      },
      {
        question: "I'm not technical at all. Can I really use this?",
        answer:
          "SacredSpace was built for healers, not developers. Setup is guided and gentle. Our support team includes practitioners who understand this work — they speak your language. Most healers are fully operational within a day.",
      },
      {
        question: "Do you offer support for those serving underresourced communities?",
        answer:
          "Yes. We offer reduced rates for healers whose primary service is to underserved populations. This isn't charity — it's alignment. Reach out and share your situation. We'll find a way.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Your Gifts Are Meant to Reach More Souls",
    subheadline:
      "The right structure doesn't diminish the sacred — it amplifies it. Create your SacredSpace and let your medicine travel further than ever before.",
    cta: { text: "Begin Your Journey", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Book a Heart-to-Heart Call", href: "#call", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "SacredSpace" },
    tagline: "Technology in service of transformation. · A concept by Astral Integration",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Community", href: "/community" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Podcast", href: "/podcast" },
          { label: "Astral Integration", href: "/" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/help" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ],
    socialLinks: [
      { platform: "instagram", href: "https://instagram.com/sacredspace" },
      { platform: "youtube", href: "https://youtube.com/@sacredspace" },
    ],
    copyright: "© 2024 SacredSpace. All rights reserved.",
  },
};

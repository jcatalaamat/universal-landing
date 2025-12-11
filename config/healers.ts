import { NicheConfig } from "./types";

export const healersConfig: NicheConfig = {
  slug: "healers",
  theme: {
    name: "Healers Theme",
    style: "elegant",
  },
  seo: {
    title: "Grow Your Healing Practice | SacredSpace",
    description:
      "The platform designed for spiritual teachers, energy healers, and ceremony facilitators. Integration support, membership portals, and course funnels.",
    keywords: [
      "healer platform",
      "spiritual teacher software",
      "energy healing business",
      "ceremony facilitation",
      "integration coaching",
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
    cta: { text: "Start Your Journey", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "Honor Your Calling. Scale Your Impact. Serve More Souls.",
    subheadline:
      "The platform that handles the business side of healing so you can stay in your gift. Integration support, community building, and sacred commerce.",
    cta: { text: "Begin Your Journey", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Explore Features", href: "#features", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🌿", text: "Built by healers, for healers" },
      { icon: "🔮", text: "Trauma-informed design" },
      { icon: "🌍", text: "Serving 50+ countries" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "The Healer's Paradox",
    sectionSubtitle:
      "You're here to hold space for others, but who holds space for your business?",
    problems: [
      {
        icon: "⚖️",
        title: "Sacred Work, Mundane Tasks",
        description:
          "You spent years developing your gifts, but now spend hours on scheduling, emails, and invoices.",
      },
      {
        icon: "🌊",
        title: "Integration Falls Through",
        description:
          "Participants leave ceremonies transformed but struggle alone. You want to support them but can't scale 1:1 care.",
      },
      {
        icon: "🏝️",
        title: "Community Scattered",
        description:
          "Your tribe is spread across WhatsApp groups, email lists, and social platforms. No sacred container for connection.",
      },
      {
        icon: "💫",
        title: "Undervaluing Your Gifts",
        description:
          "Pricing feels awkward. Asking for money triggers guilt. Your practice struggles financially.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "Technology in Service of Spirit",
    sectionSubtitle: "Tools that honor the sacred while handling the practical.",
    solutions: [
      {
        icon: "🤖",
        title: "AI Integration Companion",
        description:
          "Participants receive personalized integration support via chat. Available 24/7, trained on your teachings.",
      },
      {
        icon: "🏛️",
        title: "Sacred Membership Portals",
        description:
          "Beautiful, private spaces for your community. Courses, meditations, and live circles in one place.",
      },
      {
        icon: "📿",
        title: "Ceremony Management",
        description:
          "Applications, screening, payments, and preparation materials - all automated with care.",
      },
      {
        icon: "💎",
        title: "Aligned Commerce",
        description:
          "Sliding scale pricing, energy exchange options, and payment plans. Abundance without compromise.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Your Path Forward",
    sectionSubtitle: "Simple steps to amplify your impact.",
    steps: [
      {
        stepNumber: 1,
        title: "Create Your Temple",
        description:
          "Set up your digital sanctuary. Upload teachings, create offerings, and design your community space.",
        icon: "🏛️",
      },
      {
        stepNumber: 2,
        title: "Welcome Your Tribe",
        description:
          "Invite participants to your portal. They access everything in one sacred container.",
        icon: "🤝",
      },
      {
        stepNumber: 3,
        title: "Serve & Scale",
        description:
          "AI handles integration support. Automation handles logistics. You focus on ceremony and teaching.",
        icon: "✨",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "For Every Healing Modality",
    sectionSubtitle: "Whether you guide ceremonies, teach, or hold space.",
    useCases: [
      {
        title: "Ceremony Facilitators",
        description:
          "Manage applications, screening calls, preparation, and integration with grace and professionalism.",
        testimonial: {
          quote:
            "The integration companion has transformed my work. Participants feel held between ceremonies, and I can actually rest.",
          author: "Maria C.",
          role: "Plant Medicine Facilitator",
        },
      },
      {
        title: "Spiritual Teachers",
        description:
          "Deliver courses, host live teachings, and build community around your wisdom tradition.",
        testimonial: {
          quote:
            "I went from scattered PDFs and Zoom links to a beautiful, cohesive learning journey. My students are thriving.",
          author: "Ram D.",
          role: "Meditation Teacher",
        },
      },
      {
        title: "Energy Healers",
        description:
          "Book sessions, send pre-session forms, and provide ongoing support between appointments.",
        testimonial: {
          quote:
            "The sliding scale pricing feature lets me serve everyone without burning out. True abundance.",
          author: "Luna B.",
          role: "Reiki Master",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Investment in Your Impact",
    sectionSubtitle: "Pricing that honors both abundance and accessibility.",
    plans: [
      {
        name: "Seedling",
        price: "$0",
        period: "/month",
        description: "For healers just beginning their journey",
        features: [
          "Basic membership portal",
          "Up to 25 members",
          "Simple scheduling",
          "Payment processing",
          "Email support",
        ],
        cta: { text: "Plant Your Seed", href: "#signup", variant: "outline" },
      },
      {
        name: "Flowering",
        price: "$67",
        period: "/month",
        description: "For established practitioners",
        features: [
          "Full membership portal",
          "Unlimited members",
          "AI integration companion",
          "Course hosting",
          "Ceremony management",
          "Sliding scale payments",
          "Priority support",
        ],
        cta: { text: "Start Growing", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Chosen",
      },
      {
        name: "Fruiting",
        price: "$197",
        period: "/month",
        description: "For retreat centers & organizations",
        features: [
          "Everything in Flowering",
          "Multiple facilitators",
          "Custom AI training",
          "White-label portal",
          "Advanced analytics",
          "Dedicated support",
        ],
        cta: { text: "Let's Talk", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Questions From the Heart",
    sectionSubtitle: "We understand the unique nature of healing work.",
    faqs: [
      {
        question: "Is this appropriate for sacred/ceremonial work?",
        answer:
          "Yes. We've designed every feature with trauma-informed principles and the sacred nature of this work in mind. Nothing feels corporate or clinical.",
      },
      {
        question: "How does the AI integration companion work?",
        answer:
          "It's trained on your teachings and integration principles. Participants can chat with it for support, journaling prompts, and grounding techniques. You review conversations and can intervene when needed.",
      },
      {
        question: "Can I offer sliding scale or energy exchange?",
        answer:
          "Absolutely. Our payment system supports sliding scale with suggested minimums, payment plans, and even work-exchange arrangements.",
      },
      {
        question: "What about participant privacy and confidentiality?",
        answer:
          "Privacy is paramount. All data is encrypted, we never share information, and you control what's collected. HIPAA-compliant options available.",
      },
      {
        question: "I'm not technical. Can I still use this?",
        answer:
          "Yes! We built this for healers, not techies. Setup is guided, and our support team includes people who understand this work.",
      },
      {
        question: "Do you offer scholarships or discounts?",
        answer:
          "Yes. We offer discounted rates for healers serving underserved communities. Reach out to discuss your situation.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Your Gifts Deserve to Reach More Souls",
    subheadline:
      "Join the community of healers using SacredSpace to scale their impact with integrity.",
    cta: { text: "Begin Your Journey", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Book a Heart-to-Heart", href: "#call", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "SacredSpace" },
    tagline: "Technology in service of transformation.",
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
          { label: "Free Guide", href: "/guide" },
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

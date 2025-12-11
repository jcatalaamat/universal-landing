import { NicheConfig } from "./types";

export const influencersConfig: NicheConfig = {
  slug: "influencers",
  theme: {
    name: "Influencers Theme",
    style: "playful",
  },
  seo: {
    title: "Scale Your Influence Without Losing Your Mind | CreatorOS",
    description:
      "AI-powered tools for creators and influencers. DM automation, content calendar, fan engagement, and monetization - all in one platform.",
    keywords: [
      "influencer tools",
      "creator platform",
      "DM automation",
      "content calendar",
      "creator economy",
      "fan engagement",
    ],
    ogImage: "/og/influencers.jpg",
  },
  nav: {
    logo: { text: "CreatorOS" },
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { text: "Get Started", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "Your AI Clone That Handles DMs While You Create",
    subheadline:
      "Engage every fan, respond to every DM, and monetize your audience 24/7. AI that sounds exactly like you.",
    cta: { text: "Clone Yourself Free", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See It In Action", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🚀", text: "10,000+ creators" },
      { icon: "💬", text: "50M+ DMs handled" },
      { icon: "💰", text: "$10M+ creator earnings" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "The Creator's Curse",
    sectionSubtitle: "Your audience is growing. Your sanity isn't.",
    problems: [
      {
        icon: "📨",
        title: "DM Overload",
        description:
          "Thousands of unread messages. Every ignored DM is a missed connection, brand deal, or sale. You can't keep up.",
      },
      {
        icon: "⏰",
        title: "No Time to Create",
        description:
          "You spend more time on admin - scheduling, responding, planning - than actually creating content.",
      },
      {
        icon: "💸",
        title: "Leaving Money on the Table",
        description:
          "Fans want to support you, buy from you, work with you. But you can't respond fast enough to capture the opportunity.",
      },
      {
        icon: "🔥",
        title: "Burnout is Coming",
        description:
          "You're always on. 24/7 pressure to post, engage, respond. The algorithm never sleeps, and neither do you.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "Your Digital Twin is Ready",
    sectionSubtitle: "AI that knows your voice, your vibe, your values.",
    solutions: [
      {
        icon: "🤖",
        title: "AI Clone That's Actually You",
        description:
          "Trained on your content and communication style. Fans can't tell the difference. You stay authentic at scale.",
      },
      {
        icon: "💬",
        title: "DM Autopilot",
        description:
          "Responds to every DM instantly. Answers questions, shares links, books calls - all while you sleep.",
      },
      {
        icon: "📅",
        title: "Content Command Center",
        description:
          "Plan, schedule, and cross-post across all platforms. Never miss a posting window again.",
      },
      {
        icon: "💰",
        title: "Monetization Engine",
        description:
          "Sell products, courses, and services directly through DMs. Convert followers to customers automatically.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Your Clone in 3 Steps",
    sectionSubtitle: "Set up once. Benefit forever.",
    steps: [
      {
        stepNumber: 1,
        title: "Train Your Clone",
        description:
          "Connect your accounts. We analyze your content, captions, and communication style to build your digital twin.",
        icon: "🧠",
      },
      {
        stepNumber: 2,
        title: "Set Your Rules",
        description:
          "Tell it what to do: answer FAQs, share links, promote products, book calls. You're always in control.",
        icon: "⚙️",
      },
      {
        stepNumber: 3,
        title: "Watch It Work",
        description:
          "Your clone handles the repetitive stuff. You review highlights, jump in for VIPs, and focus on creating.",
        icon: "🎬",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for Every Creator",
    sectionSubtitle: "Whether you have 10K or 10M followers.",
    useCases: [
      {
        title: "Content Creators",
        description:
          "Handle fan DMs, share new content, and build deeper connections without drowning in messages.",
        testimonial: {
          quote:
            "I went from 500 unread DMs to inbox zero. My engagement actually went UP because fans get instant responses now.",
          author: "Jess M.",
          role: "YouTuber, 2M subscribers",
        },
      },
      {
        title: "Coaches & Course Creators",
        description:
          "Qualify leads, answer course questions, and enroll students through automated DM conversations.",
        testimonial: {
          quote:
            "My clone sold $50K in courses last month while I was on vacation. It knows my offer better than I do.",
          author: "Marcus J.",
          role: "Business Coach",
        },
      },
      {
        title: "Brands & Personal Brands",
        description:
          "Respond to customer inquiries, handle collabs, and maintain consistent brand voice at scale.",
        testimonial: {
          quote:
            "We 10x'd our influencer outreach by having the clone handle initial conversations. Only the hot leads reach us.",
          author: "Taylor S.",
          role: "Brand Manager",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Invest in Your Time",
    sectionSubtitle: "Plans that scale with your audience.",
    plans: [
      {
        name: "Starter",
        price: "$29",
        period: "/month",
        description: "For creators just getting started",
        features: [
          "AI clone training",
          "1,000 DM responses/month",
          "Basic content calendar",
          "1 social platform",
          "Email support",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "outline" },
      },
      {
        name: "Creator",
        price: "$79",
        period: "/month",
        description: "For growing creators",
        features: [
          "Advanced AI clone",
          "Unlimited DM responses",
          "Full content command center",
          "All platforms",
          "Link in bio page",
          "Monetization tools",
          "Priority support",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Pro",
        price: "$199",
        period: "/month",
        description: "For established creators",
        features: [
          "Everything in Creator",
          "Multiple AI personas",
          "Team access",
          "Advanced analytics",
          "Brand deal management",
          "Dedicated success manager",
          "API access",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Creator Questions",
    sectionSubtitle: "Real talk about how this works.",
    faqs: [
      {
        question: "Will fans know it's AI and not really me?",
        answer:
          "Our AI is trained specifically on YOUR content and communication style. It mirrors your voice, uses your phrases, and responds like you would. Fans consistently report they can't tell the difference.",
      },
      {
        question: "What if the AI says something wrong or off-brand?",
        answer:
          "You set the guardrails. Define topics it should avoid, responses it should escalate to you, and review flagged conversations. You're always in control.",
      },
      {
        question: "How does it handle brand deals and collaborations?",
        answer:
          "The AI can qualify brand inquiries, collect information, and send your media kit. Hot leads are flagged for your personal attention.",
      },
      {
        question: "Can I use this for multiple platforms?",
        answer:
          "Yes! Connect Instagram, TikTok, Twitter, YouTube, and more. One AI clone handles all your DMs with platform-specific awareness.",
      },
      {
        question: "What about selling products and services?",
        answer:
          "Your clone can share product links, answer buying questions, handle objections, and close sales - all through natural conversation.",
      },
      {
        question: "How long does it take to set up?",
        answer:
          "Most creators are live within an hour. Connect your accounts, answer some questions about your style, and your clone starts learning immediately.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Ready to Clone Yourself?",
    subheadline:
      "Join 10,000+ creators who scaled their impact without sacrificing their sanity.",
    cta: { text: "Start Your Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Watch Demo", href: "#demo", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "CreatorOS" },
    tagline: "Scale your influence. Keep your sanity.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Integrations", href: "/integrations" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Creator Stories", href: "/stories" },
          { label: "Free Tools", href: "/tools" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/help" },
          { label: "Discord", href: "/discord" },
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
      { platform: "instagram", href: "https://instagram.com/creatoros" },
      { platform: "twitter", href: "https://twitter.com/creatoros" },
      { platform: "youtube", href: "https://youtube.com/@creatoros" },
    ],
    copyright: "© 2024 CreatorOS. All rights reserved.",
  },
};

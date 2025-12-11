import { NicheConfig } from "./types";

export const influencersConfig: NicheConfig = {
  slug: "influencers",
  theme: {
    name: "Influencers Theme",
    style: "playful",
  },
  seo: {
    title: "Your AI Clone That Never Sleeps | CreatorOS",
    description:
      "The AI-powered operating system for creators. Respond to every DM, engage every fan, and monetize 24/7 — with an AI trained to sound exactly like you.",
    keywords: [
      "influencer tools",
      "creator platform",
      "DM automation",
      "AI for creators",
      "creator economy tools",
      "fan engagement automation",
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
    cta: { text: "Clone Yourself Free", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "What If You Could Reply to Every DM — Without Lifting a Finger?",
    subheadline:
      "CreatorOS is your AI twin. It responds to fans, answers questions, sells your products, and books your calls — all in YOUR voice. You create. It handles everything else.",
    cta: { text: "Create Your Clone Free", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See a Clone in Action", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🚀", text: "Trusted by creators at every stage" },
      { icon: "💬", text: "Tens of millions of DMs handled" },
      { icon: "💰", text: "Millions in creator revenue driven" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "Your Audience Grew. Your Sanity Didn't.",
    sectionSubtitle: "Success created a monster: more followers, more demands, less time to actually create.",
    problems: [
      {
        icon: "📨",
        title: "The DM Avalanche",
        description:
          "Thousands of unread messages. Every ignored DM is a missed connection, a lost sale, a fan who feels unseen. You can't keep up — and neither can any human team.",
      },
      {
        icon: "⏰",
        title: "Creating Takes a Backseat",
        description:
          "Responding, scheduling, negotiating, admin — the work around creating eats the time you need to actually create. The thing that grew your audience is now starved of attention.",
      },
      {
        icon: "💸",
        title: "Revenue Slipping Through Your Fingers",
        description:
          "Fans want to buy. Brands want to collab. People want to book you. But you can't respond fast enough. By the time you do, they've moved on.",
      },
      {
        icon: "🔥",
        title: "The Burnout Countdown",
        description:
          "Always on. Always behind. The algorithm demands constant output, but you're running on empty. Something's going to break — and it might be you.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "Your Digital Twin Is Ready to Work",
    sectionSubtitle: "An AI that knows your voice, your vibe, your values — and works while you sleep.",
    solutions: [
      {
        icon: "🤖",
        title: "An AI Clone That's Actually You",
        description:
          "Trained on your content, your captions, your conversations. It mirrors your voice so precisely that fans genuinely can't tell the difference. Scale yourself without losing yourself.",
      },
      {
        icon: "💬",
        title: "Every DM Answered. Instantly.",
        description:
          "Questions answered. Links shared. Products sold. Calls booked. Your clone responds in seconds, 24/7 — while you sleep, create, or finally take that vacation.",
      },
      {
        icon: "📅",
        title: "Content Command Center",
        description:
          "Plan, schedule, and cross-post across every platform from one dashboard. Never miss a posting window. Never scramble for content again.",
      },
      {
        icon: "💰",
        title: "DMs That Drive Revenue",
        description:
          "Sell courses, products, and services through natural DM conversations. Your clone qualifies leads, handles objections, and closes sales — automatically.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Your Clone Goes Live in 60 Minutes",
    sectionSubtitle: "Simple setup. Immediate results. Total control.",
    steps: [
      {
        stepNumber: 1,
        title: "Feed It Your Voice",
        description:
          "Connect your accounts. We analyze your posts, captions, stories, and conversations to build an AI that sounds unmistakably like you.",
        icon: "🧠",
      },
      {
        stepNumber: 2,
        title: "Set the Rules",
        description:
          "Define what it should do: answer FAQs, share links, sell products, book calls, escalate VIPs. You decide where automation ends and you begin.",
        icon: "⚙️",
      },
      {
        stepNumber: 3,
        title: "Let It Loose",
        description:
          "Your clone takes over the repetitive conversations. You review highlights, handle the high-touch moments, and focus on what only you can do: create.",
        icon: "🎬",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for Creators at Every Stage",
    sectionSubtitle: "Whether you have 10K followers or 10M — your clone scales with you.",
    useCases: [
      {
        title: "Content Creators & Influencers",
        description:
          "Handle fan DMs, share new content, run giveaways, and build deeper connections — all without drowning in your inbox. Your engagement goes up while your stress goes down.",
        testimonial: {
          quote:
            "I went from 3,000 unread DMs to inbox zero in a week. My engagement actually increased because fans finally get responses. The clone sounds so much like me it's scary.",
          author: "Jess Martinez",
          role: "Lifestyle Creator, 2.3M followers",
        },
      },
      {
        title: "Coaches & Course Creators",
        description:
          "Qualify leads through conversation. Answer course questions. Handle objections. Enroll students. Your clone sells while you teach — or while you sleep.",
        testimonial: {
          quote:
            "My clone generated $85K in course sales last quarter while I focused on creating content. It handles the sales conversations better than I did — more patient, more consistent.",
          author: "Marcus Johnson",
          role: "Business Coach, 890K followers",
        },
      },
      {
        title: "Brands & Personal Brands",
        description:
          "Respond to customer inquiries, handle partnership outreach, and maintain consistent brand voice at scale. Turn DM chaos into a growth engine.",
        testimonial: {
          quote:
            "We 10x'd our influencer outreach efficiency. The clone handles initial conversations and qualification — only warm leads reach our team. Game changer for scaling partnerships.",
          author: "Taylor Simmons",
          role: "Brand Partnerships Director",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Your Time Is Worth More Than This",
    sectionSubtitle: "Reclaim hours every week. Drive revenue while you sleep. Scale without burning out.",
    plans: [
      {
        name: "Starter",
        price: "$29",
        period: "/month",
        description: "For creators testing the waters",
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
        description: "For creators ready to scale",
        features: [
          "Advanced AI clone (sounds exactly like you)",
          "Unlimited DM responses",
          "Full content command center",
          "All platforms (IG, TikTok, Twitter, YouTube)",
          "Link-in-bio page builder",
          "Monetization tools + sales tracking",
          "Priority support (< 4hr response)",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Pro",
        price: "$199",
        period: "/month",
        description: "For established creators and teams",
        features: [
          "Everything in Creator",
          "Multiple AI personas (brand + personal)",
          "Team access + permissions",
          "Advanced analytics + revenue attribution",
          "Brand deal pipeline management",
          "Dedicated success manager",
          "API access for custom integrations",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Real Questions from Real Creators",
    sectionSubtitle: "No fluff. Here's exactly how it works.",
    faqs: [
      {
        question: "Will fans know it's AI and not actually me?",
        answer:
          "That's the whole point — they won't. Your clone is trained specifically on YOUR content, YOUR phrases, YOUR communication style. It mirrors your voice so precisely that fans consistently report they can't tell the difference. We've obsessed over this.",
      },
      {
        question: "What if the AI says something wrong or off-brand?",
        answer:
          "You're always in control. Set guardrails: topics to avoid, questions to escalate, responses to flag for review. The clone learns your boundaries and respects them. And you can review any conversation anytime.",
      },
      {
        question: "How does it handle brand deals and collabs?",
        answer:
          "Your clone can qualify brand inquiries, collect relevant information, share your media kit, and flag hot opportunities for your personal attention. It never commits you to anything — it just makes sure you don't miss opportunities.",
      },
      {
        question: "Does it work on all my platforms?",
        answer:
          "Instagram, TikTok, Twitter, YouTube, LinkedIn — one clone handles all your DMs with platform-specific awareness. Same voice, optimized for each platform's culture and conventions.",
      },
      {
        question: "Can my clone actually sell my products and courses?",
        answer:
          "Yes — and it's often better at it than you are. Your clone can share product links, answer buying questions, handle objections, and close sales through natural, non-pushy conversation. Many creators see their DM-driven revenue double or triple.",
      },
      {
        question: "How long until I see results?",
        answer:
          "Most creators are live within an hour. Connect your accounts, answer some questions about your style, and your clone starts learning immediately. By day two, it's handling DMs. By week one, you'll wonder how you ever lived without it.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Your Audience Deserves a Response. You Deserve a Break.",
    subheadline:
      "Join thousands of creators who cloned themselves and got their time back. Start free today — your first 1,000 DMs are on us.",
    cta: { text: "Create Your Clone Free", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See a Demo First", href: "#demo", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "CreatorOS" },
    tagline: "Scale your influence. Keep your sanity. · A concept by Astral Integration",
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
          { label: "Astral Integration", href: "/" },
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

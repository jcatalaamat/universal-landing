import { NicheConfig } from "./types";

export const localbizConfig: NicheConfig = {
  slug: "localbiz",
  theme: {
    name: "Local Business Theme",
    style: "corporate",
  },
  seo: {
    title: "AI-Powered Customer Service for Local Businesses | LocalBot",
    description:
      "24/7 AI assistant for restaurants, hotels, and local businesses. Handle reservations, answer questions, and collect reviews on autopilot.",
    keywords: [
      "restaurant chatbot",
      "hotel AI assistant",
      "local business automation",
      "reservation bot",
      "review management",
    ],
    ogImage: "/og/localbiz.jpg",
  },
  nav: {
    logo: { text: "LocalBot" },
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { text: "Try Free", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "Your 24/7 AI Employee That Never Calls in Sick",
    subheadline:
      "Answer customer questions, take reservations, and collect reviews automatically. Works on WhatsApp, your website, and Google.",
    cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Watch Demo", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🏪", text: "5,000+ local businesses" },
      { icon: "⭐", text: "Avg 4.8 star rating boost" },
      { icon: "💬", text: "1M+ conversations/month" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "Sound Familiar?",
    sectionSubtitle: "Running a local business means wearing too many hats.",
    problems: [
      {
        icon: "📞",
        title: "Phone Rings Non-Stop",
        description:
          "Same questions over and over. 'What are your hours?' 'Do you take reservations?' Meanwhile, customers in front of you wait.",
      },
      {
        icon: "⏰",
        title: "After-Hours = Lost Revenue",
        description:
          "Someone wants to book a table at 11pm. Your phone goes to voicemail. They book with your competitor instead.",
      },
      {
        icon: "⭐",
        title: "Reviews Are Hit or Miss",
        description:
          "Happy customers forget to leave reviews. Unhappy ones don't. Your rating suffers despite great service.",
      },
      {
        icon: "🌐",
        title: "Online Presence is Overwhelming",
        description:
          "Google, Yelp, Instagram DMs, your website - customers reach out everywhere and messages slip through cracks.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "Meet Your AI Assistant",
    sectionSubtitle: "Trained on your business. Available 24/7. Never complains.",
    solutions: [
      {
        icon: "💬",
        title: "Instant Answers, Always",
        description:
          "Handles FAQs instantly: hours, menu, parking, accessibility - trained on YOUR business details.",
      },
      {
        icon: "📅",
        title: "Smart Reservations",
        description:
          "Takes bookings via chat, syncs with your calendar, sends confirmations and reminders automatically.",
      },
      {
        icon: "⭐",
        title: "Review Booster",
        description:
          "Automatically asks happy customers for reviews at the right moment. Your rating climbs on autopilot.",
      },
      {
        icon: "🌍",
        title: "Multilingual Support",
        description:
          "Speaks 50+ languages. Perfect for tourist areas or diverse communities. No extra cost.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Live in 15 Minutes",
    sectionSubtitle: "No technical skills needed. We set everything up for you.",
    steps: [
      {
        stepNumber: 1,
        title: "Tell Us About Your Business",
        description:
          "Share your menu, hours, FAQs, and policies. We train your AI on everything customers ask.",
        icon: "📝",
      },
      {
        stepNumber: 2,
        title: "Connect Your Channels",
        description:
          "Link WhatsApp, your website, and Google. One AI handles all of them seamlessly.",
        icon: "🔗",
      },
      {
        stepNumber: 3,
        title: "Watch It Work",
        description:
          "Your AI starts answering questions and taking bookings immediately. You handle the complex stuff.",
        icon: "🚀",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for Local Heroes",
    sectionSubtitle: "From cozy cafés to boutique hotels.",
    useCases: [
      {
        title: "Restaurants & Cafés",
        description:
          "Handle reservations, share menus, answer dietary questions, and boost reviews automatically.",
        testimonial: {
          quote:
            "Friday nights used to be chaos with the phone ringing off the hook. Now 80% of reservations come through the bot. Game changer.",
          author: "Marco T.",
          role: "Owner, Bella Italia",
        },
      },
      {
        title: "Hotels & B&Bs",
        description:
          "Answer availability questions, share amenities, handle booking inquiries, and provide local recommendations.",
        testimonial: {
          quote:
            "Guests love getting instant answers at midnight. Our booking rate from website visitors doubled.",
          author: "Sophie L.",
          role: "Manager, Seaside Inn",
        },
      },
      {
        title: "Retail & Services",
        description:
          "Share product info, handle appointment bookings, answer store hours and location questions.",
        testimonial: {
          quote:
            "We went from 5 calls per hour to maybe 5 per day. Everything else the bot handles perfectly.",
          author: "David K.",
          role: "Owner, Urban Barbershop",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Simple Pricing, Serious ROI",
    sectionSubtitle: "Less than the cost of one employee hour per day.",
    plans: [
      {
        name: "Starter",
        price: "$49",
        period: "/month",
        description: "For small businesses just getting started",
        features: [
          "500 conversations/month",
          "WhatsApp + website widget",
          "Basic FAQ handling",
          "Reservation management",
          "Email support",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "outline" },
      },
      {
        name: "Growth",
        price: "$99",
        period: "/month",
        description: "For busy businesses with high volume",
        features: [
          "Unlimited conversations",
          "All channels (WhatsApp, Web, Google)",
          "Advanced AI training",
          "Review collection & management",
          "Analytics dashboard",
          "Priority support",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Enterprise",
        price: "$249",
        period: "/month",
        description: "For multi-location businesses",
        features: [
          "Everything in Growth",
          "Multiple locations",
          "Custom integrations (POS, CRM)",
          "Dedicated account manager",
          "Custom AI training",
          "API access",
        ],
        cta: { text: "Contact Sales", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Questions? We've Got Answers",
    sectionSubtitle: "Everything you need to know about LocalBot.",
    faqs: [
      {
        question: "How does the AI know about my business?",
        answer:
          "We train it on information you provide: your menu, hours, policies, FAQs, and anything else customers ask about. It learns your business inside and out.",
      },
      {
        question: "What if a customer asks something the AI can't handle?",
        answer:
          "It smoothly hands off to you via notification. You can jump in anytime, and the AI learns from how you handle edge cases.",
      },
      {
        question: "Does it work with my existing reservation system?",
        answer:
          "Yes! We integrate with popular systems like OpenTable, Resy, Yelp, and many more. We can also work standalone if you don't have one.",
      },
      {
        question: "How do the review requests work?",
        answer:
          "After a positive interaction, the AI invites customers to leave a review with a direct link to Google or Yelp. Timing is optimized for maximum response.",
      },
      {
        question: "Is there a contract or commitment?",
        answer:
          "No contracts. Month-to-month billing. Cancel anytime with one click. We earn your business every month.",
      },
      {
        question: "Can it handle multiple languages?",
        answer:
          "Yes! The AI automatically detects the customer's language and responds accordingly. Over 50 languages supported at no extra cost.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Stop Missing Customers. Start Growing.",
    subheadline:
      "Join 5,000+ local businesses using LocalBot to deliver amazing customer service 24/7.",
    cta: { text: "Start Your Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See a Demo", href: "#demo", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "LocalBot" },
    tagline: "AI-powered customer service for local businesses.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Integrations", href: "/integrations" },
          { label: "Case Studies", href: "/cases" },
        ],
      },
      {
        title: "Industries",
        links: [
          { label: "Restaurants", href: "/restaurants" },
          { label: "Hotels", href: "/hotels" },
          { label: "Retail", href: "/retail" },
          { label: "Services", href: "/services" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/help" },
          { label: "Contact", href: "/contact" },
          { label: "Status", href: "/status" },
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
      { platform: "facebook", href: "https://facebook.com/localbot" },
      { platform: "linkedin", href: "https://linkedin.com/company/localbot" },
    ],
    copyright: "© 2024 LocalBot. All rights reserved.",
  },
};

import { NicheConfig } from "./types";

export const studiosConfig: NicheConfig = {
  slug: "studios",
  theme: {
    name: "Studios Theme",
    style: "elegant",
  },
  seo: {
    title: "Fill Every Class, Automatically | StudioFlow",
    description:
      "The booking system that yoga studios and wellness centers actually love. WhatsApp reservations, smart reminders, and student engagement — without the admin headache.",
    keywords: [
      "yoga studio software",
      "wellness center management",
      "class booking system",
      "studio management platform",
      "WhatsApp booking for studios",
      "yoga class scheduling",
    ],
    ogImage: "/og/studios.jpg",
  },
  nav: {
    logo: { text: "StudioFlow" },
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { text: "Start Free", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "Your Classes Full. Your Phone Silent. Your Students Happy.",
    subheadline:
      "StudioFlow handles bookings, reminders, and waitlists through WhatsApp — the app your students already use. No more missed calls. No more empty mats. No more chaos.",
    cta: { text: "Start Your Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Watch 2-Min Demo", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🧘", text: "Trusted by studios worldwide" },
      { icon: "📱", text: "60% fewer no-shows" },
      { icon: "⚡", text: "Live in under 5 minutes" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "You Opened a Studio to Teach. Not to Answer Phones.",
    sectionSubtitle:
      "Yet here you are — juggling messages, chasing no-shows, and managing chaos instead of flowing through your practice.",
    problems: [
      {
        icon: "📞",
        title: "The Booking Bombardment",
        description:
          "WhatsApp, Instagram DMs, phone calls, walk-ins — bookings come from everywhere. You're constantly interrupted, and messages slip through the cracks.",
      },
      {
        icon: "👻",
        title: "Empty Mats, Lost Income",
        description:
          "Students book, then vanish. No-shows and last-minute cancellations leave you teaching half-empty classes and absorbing the loss.",
      },
      {
        icon: "📋",
        title: "Waitlists You Can't Manage",
        description:
          "Popular classes overflow while others sit empty. Manual waitlist management means missed opportunities and frustrated students.",
      },
      {
        icon: "😰",
        title: "Students Who Drift Away",
        description:
          "Life gets busy. Students stop coming. Without easy rebooking and gentle nudges, they forget you — and find another studio.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "One System. Every Booking. Zero Stress.",
    sectionSubtitle: "Students book on WhatsApp. You teach. Everything else happens automatically.",
    solutions: [
      {
        icon: "💬",
        title: "WhatsApp Booking That Just Works",
        description:
          "Students message your studio number, see available classes, and book instantly. No app downloads. No friction. Just yoga.",
      },
      {
        icon: "🔔",
        title: "Reminders That Actually Remind",
        description:
          "Automatic WhatsApp messages 24 hours and 2 hours before class. No-shows drop 60%. Students arrive prepared and on time.",
      },
      {
        icon: "📅",
        title: "Smart Class Management",
        description:
          "Schedules, capacity limits, waitlists, cancellation policies — all handled automatically. The right students in the right classes, always.",
      },
      {
        icon: "💝",
        title: "Students Who Keep Coming Back",
        description:
          "Automated check-ins for absent students. Birthday messages. Class streak celebrations. Small touches that build lasting loyalty.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Teaching in 5 Minutes. Thriving in 5 Weeks.",
    sectionSubtitle: "No technical skills. No complicated setup. No excuses not to start today.",
    steps: [
      {
        stepNumber: 1,
        title: "Connect Your WhatsApp",
        description:
          "Link your studio's WhatsApp Business number. We configure your booking bot automatically — same number, new superpowers.",
        icon: "📱",
      },
      {
        stepNumber: 2,
        title: "Add Your Schedule",
        description:
          "Import your class schedule or build it fresh. Set capacity, pricing, instructors, and policies. Takes about 10 minutes.",
        icon: "📅",
      },
      {
        stepNumber: 3,
        title: "Open the Doors",
        description:
          "Share your booking link. Students book via WhatsApp, get reminders, and show up. You focus on what you do best — teaching.",
        icon: "🌟",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for Studios That Want to Grow",
    sectionSubtitle: "From solo teachers to multi-location wellness centers.",
    useCases: [
      {
        title: "Yoga & Movement Studios",
        description:
          "Manage drop-ins, class packs, and unlimited memberships. Track student attendance, celebrate milestones, and watch retention climb.",
        testimonial: {
          quote:
            "Bookings jumped 40% the first month. The WhatsApp bot handles what used to take me 2 hours every day. I actually have time to practice now.",
          author: "Maya Rodriguez",
          role: "Owner, Lotus Flow Yoga",
        },
      },
      {
        title: "Pilates & Reformer Studios",
        description:
          "Equipment-based classes need precision scheduling. Manage reformer reservations, private sessions, and equipment availability effortlessly.",
        testimonial: {
          quote:
            "No more double-bookings on the reformers. Clients book their favorite machine and time slot directly. Our schedule runs itself.",
          author: "Carlos Mendez",
          role: "Pilates Studio Director",
        },
      },
      {
        title: "Wellness & Healing Centers",
        description:
          "Multiple practitioners, treatment rooms, and service types — all coordinated in one system. Clients book the right person in the right room.",
        testimonial: {
          quote:
            "We have 6 practitioners and 180 appointments per week. StudioFlow eliminated the scheduling nightmare completely.",
          author: "Dr. Anna Krishnamurthy",
          role: "Founder, Harmony Wellness Center",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Pricing That Makes Sense",
    sectionSubtitle: "Start free. Grow without limits. Cancel anytime.",
    plans: [
      {
        name: "Solo",
        price: "$0",
        period: "/month",
        description: "For independent teachers and small studios",
        features: [
          "Up to 30 bookings/month",
          "WhatsApp booking bot",
          "Automatic reminders",
          "Basic class schedule",
          "Email support",
        ],
        cta: { text: "Start Free Forever", href: "#signup", variant: "outline" },
      },
      {
        name: "Studio",
        price: "$39",
        period: "/month",
        description: "For established studios ready to scale",
        features: [
          "Unlimited bookings",
          "Advanced WhatsApp automation",
          "Waitlist management",
          "Student engagement campaigns",
          "Analytics + attendance reports",
          "Priority WhatsApp support",
        ],
        cta: { text: "Start 14-Day Free Trial", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Enterprise",
        price: "$99",
        period: "/month",
        description: "For multi-location studios and wellness chains",
        features: [
          "Everything in Studio",
          "Multiple locations",
          "Staff + instructor management",
          "Custom integrations",
          "Dedicated account manager",
          "API access",
        ],
        cta: { text: "Book a Demo", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Questions Studios Ask",
    sectionSubtitle: "Real answers from people who understand studio life.",
    faqs: [
      {
        question: "Do my students need to download anything?",
        answer:
          "No. Everything happens through WhatsApp, which 2 billion people already use. No new apps, no accounts to create, no friction. They message, they book, they show up.",
      },
      {
        question: "Can I keep my existing WhatsApp number?",
        answer:
          "Yes — we connect to your existing WhatsApp Business number. Your students won't notice anything different except that booking just got incredibly easy.",
      },
      {
        question: "How do payments work?",
        answer:
          "Students can pay directly through WhatsApp using cards or digital wallets. Funds go straight to your bank account. We handle class packs, memberships, and drop-in payments.",
      },
      {
        question: "What about class packages and memberships?",
        answer:
          "Fully supported. Create unlimited packages, punch cards, and membership tiers. The system tracks usage automatically and reminds students when they're running low.",
      },
      {
        question: "We have multiple instructors. Does that work?",
        answer:
          "Perfectly. Each instructor has their own schedule. Students can book with their preferred teacher or browse all available classes. Everyone stays synchronized.",
      },
      {
        question: "How fast can we actually get started?",
        answer:
          "Most studios are live in under 15 minutes. Connect WhatsApp, add your schedule, share your link. Our setup wizard makes it nearly impossible to get stuck.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Your Next Class Could Be Your Fullest Yet",
    subheadline:
      "Join studios worldwide filling classes effortlessly with StudioFlow. Start free today — your students are already on WhatsApp.",
    cta: { text: "Start Your Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See It In Action", href: "#demo", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "StudioFlow" },
    tagline: "Full classes. Happy students. Peaceful mind. · A concept by Astral Integration",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Integrations", href: "#integrations" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Astral Integration", href: "/" },
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
      { platform: "instagram", href: "https://instagram.com/studioflow" },
      { platform: "facebook", href: "https://facebook.com/studioflow" },
    ],
    copyright: "© 2024 StudioFlow. All rights reserved.",
  },
};

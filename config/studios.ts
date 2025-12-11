import { NicheConfig } from "./types";

export const studiosConfig: NicheConfig = {
  slug: "studios",
  theme: {
    name: "Studios Theme",
    style: "elegant",
  },
  seo: {
    title: "Grow Your Yoga & Wellness Studio | StudioFlow",
    description:
      "The complete platform for yoga studios and wellness centers. WhatsApp booking, class management, and client engagement on autopilot.",
    keywords: [
      "yoga studio software",
      "wellness center management",
      "class booking system",
      "studio management",
      "WhatsApp booking",
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
    cta: { text: "Get Started", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "Fill Your Classes. Delight Your Students. Grow Your Studio.",
    subheadline:
      "The all-in-one platform that handles bookings, reminders, and client communication so you can focus on teaching.",
    cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See It In Action", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🧘", text: "Trusted by 1000+ studios" },
      { icon: "📱", text: "WhatsApp integration" },
      { icon: "⚡", text: "5-minute setup" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "Running a Studio Shouldn't Be This Hard",
    sectionSubtitle:
      "You became a yoga teacher to change lives, not to manage spreadsheets.",
    problems: [
      {
        icon: "📞",
        title: "Phone Tag for Bookings",
        description:
          "Students DM you, call you, text you. You're spending more time managing messages than teaching classes.",
      },
      {
        icon: "👻",
        title: "Empty Mats, Lost Revenue",
        description:
          "No-shows and last-minute cancellations leave you with half-empty classes and wasted energy.",
      },
      {
        icon: "📋",
        title: "Manual Everything",
        description:
          "Tracking attendance, managing waitlists, sending reminders - it's all on you, and it's exhausting.",
      },
      {
        icon: "😰",
        title: "Disconnected Students",
        description:
          "Students drift away because there's no easy way to stay connected between classes.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "Your Studio, Simplified",
    sectionSubtitle: "Everything you need to run a thriving studio.",
    solutions: [
      {
        icon: "💬",
        title: "WhatsApp Booking Bot",
        description:
          "Students book classes directly via WhatsApp. 24/7 availability, zero effort from you.",
      },
      {
        icon: "🔔",
        title: "Smart Reminders",
        description:
          "Automatic reminders reduce no-shows by 60%. Students get notified at the perfect time.",
      },
      {
        icon: "📅",
        title: "Class Management",
        description:
          "Schedules, waitlists, capacity limits - all managed automatically so every class runs smoothly.",
      },
      {
        icon: "💝",
        title: "Student Engagement",
        description:
          "Automated check-ins, birthday messages, and re-engagement campaigns keep students coming back.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Up and Running in Minutes",
    sectionSubtitle: "No technical skills required. Just connect and go.",
    steps: [
      {
        stepNumber: 1,
        title: "Connect WhatsApp",
        description:
          "Link your studio's WhatsApp number. We'll set up your booking bot automatically.",
        icon: "📱",
      },
      {
        stepNumber: 2,
        title: "Add Your Schedule",
        description:
          "Import your class schedule or create it from scratch. Set capacity, pricing, and policies.",
        icon: "📅",
      },
      {
        stepNumber: 3,
        title: "Share & Grow",
        description:
          "Share your booking link. Students book, you teach, everyone's happy.",
        icon: "🌟",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Perfect for Every Studio Type",
    sectionSubtitle: "From intimate boutiques to multi-location centers.",
    useCases: [
      {
        title: "Yoga Studios",
        description:
          "Manage drop-ins, packages, and memberships. Track student progress and celebrate milestones.",
        testimonial: {
          quote:
            "Our bookings increased 40% in the first month. The WhatsApp bot is like having a 24/7 receptionist.",
          author: "Maya R.",
          role: "Owner, Lotus Yoga Studio",
        },
      },
      {
        title: "Pilates Studios",
        description:
          "Handle equipment reservations, reformer classes, and private sessions effortlessly.",
        testimonial: {
          quote:
            "No more phone calls during class! Students love booking on WhatsApp.",
          author: "Carlos M.",
          role: "Pilates Instructor",
        },
      },
      {
        title: "Wellness Centers",
        description:
          "Coordinate multiple practitioners, treatment rooms, and service types in one platform.",
        testimonial: {
          quote:
            "We manage 5 practitioners and 200+ weekly appointments without any drama.",
          author: "Anna K.",
          role: "Director, Harmony Wellness",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Pricing That Grows With You",
    sectionSubtitle: "Start free, scale as you grow.",
    plans: [
      {
        name: "Solo",
        price: "$0",
        period: "/month",
        description: "For individual teachers and small studios",
        features: [
          "Up to 20 bookings/month",
          "WhatsApp booking bot",
          "Basic reminders",
          "Class schedule",
          "Email support",
        ],
        cta: { text: "Start Free", href: "#signup", variant: "outline" },
      },
      {
        name: "Studio",
        price: "$39",
        period: "/month",
        description: "For growing studios",
        features: [
          "Unlimited bookings",
          "Advanced WhatsApp automation",
          "Waitlist management",
          "Student engagement tools",
          "Analytics & reports",
          "Priority support",
        ],
        cta: { text: "Start Free Trial", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Best Value",
      },
      {
        name: "Enterprise",
        price: "$99",
        period: "/month",
        description: "For multi-location studios",
        features: [
          "Everything in Studio",
          "Multiple locations",
          "Staff management",
          "Custom integrations",
          "Dedicated account manager",
          "API access",
        ],
        cta: { text: "Contact Us", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Common Questions",
    sectionSubtitle: "Everything you need to know to get started.",
    faqs: [
      {
        question: "Do my students need to download an app?",
        answer:
          "No! Everything works through WhatsApp, which your students already have. No new apps, no friction.",
      },
      {
        question: "Can I keep my existing WhatsApp number?",
        answer:
          "Yes! We connect to your existing business WhatsApp number. Your students won't notice any change except better booking.",
      },
      {
        question: "How do payments work?",
        answer:
          "Students can pay via WhatsApp using cards or digital wallets. You receive funds directly to your bank account.",
      },
      {
        question: "Can I sell class packages and memberships?",
        answer:
          "Absolutely! Create packages, punch cards, and memberships. The system tracks usage automatically.",
      },
      {
        question: "What if I have multiple instructors?",
        answer:
          "No problem! Each instructor can have their own schedule, and students can book with their preferred teacher.",
      },
      {
        question: "How quickly can I get set up?",
        answer:
          "Most studios are up and running in under 15 minutes. Our onboarding wizard makes it simple.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Ready to Fill Every Class?",
    subheadline:
      "Join 1,000+ studios using StudioFlow to grow their practice. Start your free trial today.",
    cta: { text: "Get Started Free", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Book a Demo", href: "#demo", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "StudioFlow" },
    tagline: "The modern booking platform for wellness studios.",
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
          { label: "Careers", href: "/careers" },
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

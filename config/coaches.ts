import { NicheConfig } from "./types";

export const coachesConfig: NicheConfig = {
  slug: "coaches",
  theme: {
    name: "Coaches Theme",
    style: "minimal",
  },
  seo: {
    title: "Double Your Coaching Revenue Without Adding Hours | CoachPro",
    description:
      "The client management system that helps coaches reclaim 10+ hours per week. Automated scheduling, payments, and AI session notes — so you can focus entirely on transformation.",
    keywords: [
      "coaching platform",
      "life coach software",
      "coaching business automation",
      "client management for coaches",
      "AI coaching tools",
      "coaching practice management",
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
    cta: { text: "Start Free — No Card Required", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "Stop Managing Your Practice. Start Growing It.",
    subheadline:
      "CoachPro handles scheduling, payments, and client admin automatically — giving you back 10+ hours every week to coach, create, or simply rest.",
    cta: { text: "Start Your Free 14-Day Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See How It Works", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "⭐", text: "Loved by coaches worldwide" },
      { icon: "🔒", text: "Bank-level security" },
      { icon: "⚡", text: "Setup in under 10 minutes" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "You Didn't Become a Coach to Chase Invoices",
    sectionSubtitle:
      "Yet here you are — spending evenings on admin instead of the work that actually matters.",
    problems: [
      {
        icon: "📅",
        title: "The Scheduling Spiral",
        description:
          "17 emails to book one session. Timezone confusion. Last-minute cancellations. By the time you've coordinated schedules, you've lost the energy to actually coach.",
      },
      {
        icon: "💸",
        title: "Money Left on the Table",
        description:
          "Unpaid invoices sitting for weeks. Awkward payment conversations. Clients who ghost after the first session because rebooking was too complicated.",
      },
      {
        icon: "📊",
        title: "Flying Blind",
        description:
          "No clear view of your revenue, retention, or client progress. You're making business decisions based on gut feeling instead of real data.",
      },
      {
        icon: "🔄",
        title: "The Admin Trap",
        description:
          "Session notes, homework reminders, follow-up emails, progress tracking — the work after the work is drowning you. And it never ends.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "One System. Zero Busywork. Pure Focus.",
    sectionSubtitle: "Everything that drains your energy — automated. Everything that grows your practice — amplified.",
    solutions: [
      {
        icon: "📅",
        title: "Clients Book Themselves",
        description:
          "Your availability syncs automatically. Clients pick a time, pay instantly, and receive confirmations + reminders. No back-and-forth. No no-shows.",
      },
      {
        icon: "💳",
        title: "Payments That Just Happen",
        description:
          "Packages, subscriptions, single sessions — all handled. Automatic invoicing, payment reminders, and seamless checkout. You never chase money again.",
      },
      {
        icon: "📈",
        title: "A Client Portal They'll Actually Use",
        description:
          "Branded space for resources, homework, session history, and progress tracking. Clients feel supported between sessions — and stay longer because of it.",
      },
      {
        icon: "🤖",
        title: "AI That Does Your Paperwork",
        description:
          "Session summaries generated automatically. Key insights captured. Follow-up prompts suggested. You stay present in sessions because the admin handles itself.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Live in 10 Minutes. Transformed in 10 Days.",
    sectionSubtitle: "No technical skills. No complex setup. Just results.",
    steps: [
      {
        stepNumber: 1,
        title: "Import & Configure",
        description:
          "Connect your calendar, set your availability, and import existing clients with one click. Your booking page is live in minutes.",
        icon: "⚡",
      },
      {
        stepNumber: 2,
        title: "Share Your Link",
        description:
          "Send your personalized booking link. Embed it on your website. Add it to your email signature. Clients book, pay, and you're notified instantly.",
        icon: "🔗",
      },
      {
        stepNumber: 3,
        title: "Coach With Clarity",
        description:
          "Show up fully to every session. AI captures notes, automation handles follow-ups, and your dashboard shows exactly how your practice is growing.",
        icon: "🎯",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for Coaches Who Want More",
    sectionSubtitle: "More impact. More income. More time. Not more hours.",
    useCases: [
      {
        title: "Life & Transformation Coaches",
        description:
          "Structured programs with milestone tracking. Automated homework delivery. Progress dashboards that show clients their own transformation — boosting retention and referrals.",
        testimonial: {
          quote:
            "I went from 12 clients struggling to keep up, to 28 clients with less stress. The automation handles everything I used to dread. My revenue doubled in 4 months.",
          author: "Sarah Mitchell",
          role: "Transformation Coach, Austin TX",
        },
      },
      {
        title: "Executive & Leadership Coaches",
        description:
          "White-glove experience for high-ticket clients. Branded portals, professional invoicing, and seamless scheduling that matches the premium nature of your service.",
        testimonial: {
          quote:
            "My corporate clients expect polish. CoachPro delivers. The client portal alone justified the switch — three clients mentioned it elevated their perception of my practice.",
          author: "James Chen",
          role: "Executive Coach, Former McKinsey",
        },
      },
      {
        title: "Health & Wellness Coaches",
        description:
          "Track nutrition, habits, and wellness metrics. Celebrate wins automatically. Keep clients accountable between sessions with structured check-ins.",
        testimonial: {
          quote:
            "Client retention jumped 40% once I could show people their actual progress over time. The data doesn't lie — and neither do the results.",
          author: "Dr. Lisa Torres",
          role: "Integrative Health Coach",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Investment That Pays for Itself",
    sectionSubtitle: "Most coaches save 10+ hours per week. At your hourly rate, that's hundreds back in your pocket.",
    plans: [
      {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "Everything you need to test the waters",
        features: [
          "Up to 5 active clients",
          "Automated scheduling + reminders",
          "Payment processing (2.9% + 30¢)",
          "Basic client portal",
          "Email support",
        ],
        cta: { text: "Start Free Forever", href: "#signup", variant: "outline" },
      },
      {
        name: "Professional",
        price: "$49",
        period: "/month",
        description: "For coaches ready to scale without burning out",
        features: [
          "Unlimited clients",
          "AI session summaries + insights",
          "Full branded client portal",
          "Package & subscription management",
          "Analytics dashboard + revenue tracking",
          "Priority support (< 4hr response)",
        ],
        cta: { text: "Start 14-Day Free Trial", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For coaching organizations and multi-coach teams",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom integrations (Zapier, API)",
          "Dedicated success manager",
          "Custom SLA + uptime guarantee",
          "White-label option available",
        ],
        cta: { text: "Book a Strategy Call", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Questions We Hear Often",
    sectionSubtitle: "Straight answers. No sales speak.",
    faqs: [
      {
        question: "How long until I see real results?",
        answer:
          "Most coaches report saving 5+ hours in their first week just from automated scheduling. By week two, payment automation kicks in. Within a month, the AI session notes become indispensable. The ROI is fast and obvious.",
      },
      {
        question: "Can I migrate from Calendly / Acuity / my current mess?",
        answer:
          "Yes — we handle migrations for free. We'll import your client list, session history, and existing packages. Most migrations complete in under 24 hours with zero disruption to your practice.",
      },
      {
        question: "Is my (and my clients') data actually secure?",
        answer:
          "Bank-level encryption. SOC 2 compliant infrastructure. GDPR ready. We take security as seriously as you take confidentiality. Your clients' trust is non-negotiable.",
      },
      {
        question: "What if I hate it? Am I locked in?",
        answer:
          "No contracts. No commitments. Cancel with one click anytime. We'll even help you export everything if you leave. We keep customers by being valuable, not by trapping them.",
      },
      {
        question: "Does it work with Zoom, Google Meet, etc.?",
        answer:
          "Seamlessly. Connect your preferred platform once, and meeting links are automatically created and sent with every booking. Works with Zoom, Google Meet, Microsoft Teams, and more.",
      },
      {
        question: "I'm not technical. Can I actually set this up?",
        answer:
          "If you can send an email, you can set up CoachPro. Most coaches are live in under 10 minutes. And if you get stuck, our support team (staffed by people who understand coaching) will walk you through it.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Your Next Client Is Waiting. Your Calendar Shouldn't Be.",
    subheadline:
      "Join coaches worldwide who stopped drowning in admin and started building the practice they actually wanted. Free for 14 days. No credit card required.",
    cta: { text: "Start Your Free Trial Now", href: "#signup", variant: "primary" },
    secondaryCta: {
      text: "See It In Action First",
      href: "#demo",
      variant: "outline",
    },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "CoachPro" },
    tagline: "Less admin. More transformation. · A concept by Astral Integration",
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
          { label: "Astral Integration", href: "/" },
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

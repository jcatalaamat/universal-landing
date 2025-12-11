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
      "We build the intelligent infrastructure behind transformational work — client portals, AI assistants, automations, and digital ecosystems for those who teach, guide, heal, and transform.",
    keywords: [
      "AI systems for coaches",
      "coaching platform development",
      "client portal builder",
      "automation for healers",
      "transformational business technology",
      "AI assistant for teachers",
      "spiritual business systems",
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
    cta: { text: "Book a Discovery Call", href: "#contact", variant: "primary" },
  },
  hero: {
    headline: "Your Work Transforms Lives. Your Systems Should Too.",
    subheadline:
      "We build custom AI-powered platforms, client portals, and intelligent automations for teachers, coaches, and transformational leaders — so your digital infrastructure finally matches the depth of your work.",
    cta: { text: "Request Your AI Blueprint", href: "#contact", variant: "primary" },
    secondaryCta: { text: "See Our Work", href: "#use-cases", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🧘", text: "Built for transformational work" },
      { icon: "🤖", text: "AI-native architecture" },
      { icon: "🔧", text: "Custom-built, not cookie-cutter" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "Your Gifts Deserve Better Infrastructure",
    sectionSubtitle:
      "You've spent years mastering your craft. But your digital systems? They're held together with duct tape and good intentions.",
    problems: [
      {
        icon: "🔀",
        title: "The Tool Sprawl",
        description:
          "Booking here. Payments there. Notes in Google Docs. Clients scattered across WhatsApp groups. Nothing connects. Nothing flows. And you're the glue holding it all together.",
      },
      {
        icon: "⏰",
        title: "Trapped in the Admin Spiral",
        description:
          "Invoices, reminders, onboarding, follow-ups — hours every week lost to tasks that could be automated. Time that should go to your actual work, or to simply resting.",
      },
      {
        icon: "🚪",
        title: "A Client Experience That Doesn't Match Your Excellence",
        description:
          "Your work is transformational. But the digital experience around it? Confusing links, scattered resources, no cohesive journey. Clients deserve better. So do you.",
      },
      {
        icon: "🤖",
        title: "AI Opportunity Left on the Table",
        description:
          "You know AI could revolutionize your practice — session summaries, integration support, intelligent assistants. But who has time to figure it out? You're already stretched thin.",
      },
      {
        icon: "📈",
        title: "No Room to Grow",
        description:
          "You've hit the ceiling. More clients means more chaos. More programs means more complexity. Your systems break the moment you try to expand.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "One Intelligent System Behind Your Entire Practice",
    sectionSubtitle:
      "We architect digital ecosystems that feel like extensions of your work — connected, automated, and built for growth.",
    solutions: [
      {
        icon: "🏛️",
        title: "Custom Client & Student Portals",
        description:
          "Branded spaces where your people access sessions, resources, progress tracking, and action steps — designed around your methodology, not someone else's template.",
      },
      {
        icon: "🧠",
        title: "AI-Powered Coaching & Teaching Support",
        description:
          "Session summaries generated automatically. Integration prompts personalized to each client. AI assistants trained on your approach. Your presence, scaled intelligently.",
      },
      {
        icon: "⚡",
        title: "Automated Operations That Actually Work",
        description:
          "Onboarding flows, scheduling, payments, reminders, follow-ups — running seamlessly in the background. You focus on the work that requires you. Everything else handles itself.",
      },
      {
        icon: "💬",
        title: "WhatsApp & Messaging Integrations",
        description:
          "Smart automations and AI assistants that live where your people already communicate. No new apps to download. No friction. Just intelligent support, right where it's needed.",
      },
      {
        icon: "📊",
        title: "Dashboards That Show What Matters",
        description:
          "Clients, programs, revenue, engagement — all visible at a glance. Make decisions based on data, not guesswork. Finally, clarity about your practice.",
      },
      {
        icon: "✨",
        title: "Designed for Depth, Not Just Efficiency",
        description:
          "We understand that your work isn't just 'business.' Every system we build honors the emotional, spiritual, and developmental nature of transformation.",
      },
    ],
    layout: "grid-3",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "From Vision to Running System",
    sectionSubtitle:
      "A clear, collaborative process that respects your time and your expertise.",
    steps: [
      {
        stepNumber: 1,
        title: "The AI Systems Blueprint",
        description:
          "We map your entire practice — offers, client journeys, existing tools, pain points, and possibilities. Then we design your ideal architecture: what to build, what to integrate, and what AI can handle.",
        icon: "📐",
      },
      {
        stepNumber: 2,
        title: "Custom Build & Integration",
        description:
          "We construct your platform, automations, and AI features — integrating the tools you already love where it makes sense. No unnecessary rebuilding. No forced migrations.",
        icon: "🔧",
      },
      {
        stepNumber: 3,
        title: "Launch & Evolution",
        description:
          "Your system goes live. We train you (and your team, if you have one). Then we iterate based on real usage — refining, expanding, and evolving as your work grows.",
        icon: "🚀",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for Those Who Transform",
    sectionSubtitle:
      "Whether you work 1:1, run programs, lead a school, or host retreats — we've built systems for work like yours.",
    useCases: [
      {
        title: "Coaches & Therapists",
        description:
          "A unified home for your client relationships — sessions, notes, progress, resources, and follow-ups. AI handles the documentation. You stay present in the room.",
        testimonial: {
          quote:
            "I used to spend 5 hours every weekend on session notes and follow-ups. Now it takes 20 minutes. The AI captures everything — and honestly, the summaries are better than what I was writing.",
          author: "Elena Vasquez",
          role: "Somatic Therapist, 12 years practice",
        },
      },
      {
        title: "Spiritual Teachers & Schools",
        description:
          "A digital temple for your teachings — courses, community, live programs, student pathways. Technology that feels like an extension of your practice, not a compromise.",
        testimonial: {
          quote:
            "We went from scattered content and chaotic Zoom links to a cohesive learning journey. Students go deeper. Retention doubled. And it finally feels like our digital presence honors the work.",
          author: "Ram Dass Kapoor",
          role: "Founder, Mountain Dharma Institute",
        },
      },
      {
        title: "Retreat Centers & Studios",
        description:
          "The experience doesn't end when they leave. Systems for bookings, preparation, follow-up, integration, and ongoing community — keeping the connection alive.",
        testimonial: {
          quote:
            "Our guests now have a complete journey — from inquiry to integration. Bookings are up, reviews are better, and the repeat rate increased 60%. The systems made it possible.",
          author: "Sophia Heartwood",
          role: "Director, Sanctuary Wellness Retreat",
        },
      },
      {
        title: "Conscious Creators & Educators",
        description:
          "You have deep knowledge scattered across years of content. We help you structure it into programs, memberships, and pathways — then build the infrastructure to deliver it beautifully.",
        testimonial: {
          quote:
            "I had 400 videos and no system. Now I have a structured academy with personalized learning paths. Revenue went from sporadic to predictable. I wish I'd done this years ago.",
          author: "Daniel Rivers",
          role: "Meditation Teacher & Content Creator",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Ways to Work Together",
    sectionSubtitle:
      "From strategy to full implementation — choose the engagement that fits your stage and vision.",
    plans: [
      {
        name: "AI Systems Blueprint",
        price: "From €500",
        period: "",
        description: "Strategic clarity before commitment",
        features: [
          "90–120 minute deep-dive session",
          "Complete map of your ideal digital ecosystem",
          "AI & automation opportunities identified",
          "Phased implementation roadmap",
          "Recording + written summary delivered",
        ],
        cta: { text: "Request a Blueprint", href: "#contact", variant: "outline" },
      },
      {
        name: "Custom System Build",
        price: "From €3,000",
        period: "",
        description: "Your vision, fully realized",
        features: [
          "Custom portal or platform development",
          "Automations, scheduling, payments, flows",
          "Integration with your existing tools",
          "AI features trained on your methodology",
          "Launch support + team training",
          "30-day post-launch refinement included",
        ],
        cta: { text: "Apply for a Build", href: "#contact", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Evolution Partnership",
        price: "From €500/mo",
        period: "",
        description: "Ongoing systems leadership",
        features: [
          "Monthly strategy + systems support",
          "Continuous improvements & new features",
          "Priority access to AI experiments",
          "Ideal for schools, platforms, organizations",
          "Direct collaboration + async support",
          "Scale with confidence",
        ],
        cta: { text: "Explore Partnership", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Questions You Might Have",
    sectionSubtitle: "Direct answers from someone who understands this work.",
    faqs: [
      {
        question: "Do I need to be technical for this to work?",
        answer:
          "Not at all. You bring your vision, your methodology, your preferences. We handle the architecture, tools, integrations, and builds — and we explain everything in language that actually makes sense. Many of our best clients are brilliantly non-technical.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "It depends on your needs. We often work with Next.js, Vercel, n8n, WhatsApp Business API, Stripe, Airtable, Supabase, and AI models like Claude and GPT. But the stack is always chosen to fit you — we're not here to force tools you don't need.",
      },
      {
        question: "Can you work with what I already have?",
        answer:
          "Usually, yes. In many cases, we keep what's working and build an intelligent layer around it — client portals, automations, AI support — rather than forcing you to start from zero. We're pragmatic, not purist.",
      },
      {
        question: "Do you only work with spiritual or transformational businesses?",
        answer:
          "That's our focus. Teachers, coaches, healers, therapists, guides — people whose work is fundamentally about human development and transformation. If your work changes people in some meaningful way, we're likely a good fit.",
      },
      {
        question: "What does a typical project timeline look like?",
        answer:
          "An AI Systems Blueprint is delivered within 1–2 weeks. Custom builds typically run 4–10 weeks depending on scope and complexity. Evolution Partnerships are ongoing. We move at a pace that respects both quality and momentum.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Your Mission Deserves Infrastructure That Can Carry It",
    subheadline:
      "Let's map out what's possible. Tell us where your work is going — we'll architect the systems that help you get there.",
    cta: { text: "Request Your AI Blueprint", href: "#contact", variant: "primary" },
    secondaryCta: { text: "See Pricing Options", href: "#pricing", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "Astral Integration" },
    tagline: "Intelligent systems for transformational work.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "AI Blueprint", href: "#pricing" },
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
          { label: "Local Business", href: "/localbiz" },
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

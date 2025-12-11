import { NicheConfig } from "./types";

export const localbizConfig: NicheConfig = {
  slug: "localbiz",
  theme: {
    name: "Local Business Theme",
    style: "corporate",
  },
  seo: {
    title: "Never Miss Another Customer | LocalBot AI",
    description:
      "Your AI-powered employee that answers questions, takes reservations, and collects reviews 24/7. Works on WhatsApp, your website, and Google — while you run your business.",
    keywords: [
      "restaurant chatbot",
      "hotel AI assistant",
      "local business automation",
      "reservation bot",
      "review management AI",
      "WhatsApp business bot",
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
    cta: { text: "Try Free for 14 Days", href: "#signup", variant: "primary" },
  },
  hero: {
    headline: "An Employee Who Works 24/7 and Never Asks for a Raise",
    subheadline:
      "LocalBot answers customer questions, takes reservations, and asks for reviews — on WhatsApp, your website, and Google. You focus on running your business. It never sleeps.",
    cta: { text: "Start Your Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "See LocalBot in Action", href: "#demo", variant: "outline" },
    layout: "centered",
    showTrustBadges: true,
    trustBadges: [
      { icon: "🏪", text: "Trusted by local businesses everywhere" },
      { icon: "⭐", text: "Average 0.8 star rating boost" },
      { icon: "💬", text: "Millions of conversations handled" },
    ],
  },
  problem: {
    enabled: true,
    sectionTitle: "You Can't Be Everywhere. But Your Customers Expect You To Be.",
    sectionSubtitle: "Running a local business means constant interruptions — and constant missed opportunities.",
    problems: [
      {
        icon: "📞",
        title: "The Phone That Never Stops",
        description:
          "Same questions, over and over. 'What time do you close?' 'Do you take reservations?' Every call interrupts real work — and unanswered calls become lost customers.",
      },
      {
        icon: "⏰",
        title: "After Hours = Lost Revenue",
        description:
          "Someone wants to book at 11pm. Your phone goes to voicemail. They book with your competitor. By morning, you've lost a customer you never knew existed.",
      },
      {
        icon: "⭐",
        title: "Reviews That Don't Reflect Reality",
        description:
          "Happy customers forget to review. Unhappy ones don't. Your rating suffers despite great service — because you're not systematically asking at the right moment.",
      },
      {
        icon: "🌐",
        title: "Messages Coming From Everywhere",
        description:
          "Google, Instagram, WhatsApp, your website, email — customers reach out on every platform. Messages fall through cracks. Opportunities vanish.",
      },
    ],
    layout: "grid",
  },
  solution: {
    enabled: true,
    sectionTitle: "Your AI Employee Is Ready",
    sectionSubtitle: "Trained on YOUR business. Available 24/7. Speaks 50+ languages. Costs less than one shift.",
    solutions: [
      {
        icon: "💬",
        title: "Instant Answers, Every Time",
        description:
          "Hours, menu, parking, allergens, accessibility — LocalBot knows your business inside out and answers instantly. Customers get help. You stay focused.",
      },
      {
        icon: "📅",
        title: "Reservations on Autopilot",
        description:
          "Takes bookings via chat, syncs with your calendar, sends confirmations and reminders. No phone tag. No double-bookings. No missed reservations.",
      },
      {
        icon: "⭐",
        title: "Reviews That Actually Happen",
        description:
          "After positive interactions, LocalBot invites customers to review — with a direct link, at the perfect moment. Watch your rating climb week after week.",
      },
      {
        icon: "🌍",
        title: "Every Language, No Extra Cost",
        description:
          "Tourist areas? Diverse neighborhoods? LocalBot automatically detects language and responds fluently in 50+ languages. Everyone feels welcome.",
      },
    ],
    layout: "grid-4",
  },
  howItWorks: {
    enabled: true,
    sectionTitle: "Live in 15 Minutes. ROI in 15 Days.",
    sectionSubtitle: "We handle the setup. You reap the benefits.",
    steps: [
      {
        stepNumber: 1,
        title: "Tell Us About Your Business",
        description:
          "Share your menu, hours, policies, and FAQs. We train LocalBot to know your business as well as your best employee — often better.",
        icon: "📝",
      },
      {
        stepNumber: 2,
        title: "Connect Your Channels",
        description:
          "Link WhatsApp, your website, and Google Business. One AI handles all of them seamlessly — same knowledge, every platform.",
        icon: "🔗",
      },
      {
        stepNumber: 3,
        title: "Watch It Work",
        description:
          "LocalBot starts answering questions and taking bookings immediately. You handle the complex stuff. It handles everything else.",
        icon: "🚀",
      },
    ],
    layout: "horizontal",
  },
  useCases: {
    enabled: true,
    sectionTitle: "Built for the Businesses That Built Your Neighborhood",
    sectionSubtitle: "From corner cafés to boutique hotels — LocalBot speaks your customers' language.",
    useCases: [
      {
        title: "Restaurants & Cafés",
        description:
          "Handle reservations, share menus with photos, answer dietary questions, and boost reviews — all while your team focuses on the food and the guests in front of them.",
        testimonial: {
          quote:
            "Friday nights used to mean chaos — phone ringing constantly while we're slammed. Now 80% of reservations come through LocalBot. We added a dozen covers per week without adding staff.",
          author: "Marco Benedetti",
          role: "Owner, Trattoria Milano",
        },
      },
      {
        title: "Hotels & B&Bs",
        description:
          "Answer availability questions at 2am. Share amenities, check-in procedures, and local recommendations. Convert website visitors into guests while your front desk sleeps.",
        testimonial: {
          quote:
            "Guests message at all hours wanting to know if we have parking or if the room has a view. LocalBot handles 90% of inquiries. Our booking rate from website visitors doubled.",
          author: "Sophie Laurent",
          role: "Manager, Seaside Boutique Inn",
        },
      },
      {
        title: "Retail & Service Businesses",
        description:
          "Share product info, handle appointment bookings, answer store hours and direction questions. Stop losing customers who couldn't reach you.",
        testimonial: {
          quote:
            "We went from 40+ calls a day to maybe 10. Everything else — appointment bookings, product questions, directions — LocalBot handles perfectly. My team can actually focus on customers.",
          author: "David Kim",
          role: "Owner, Urban Cuts Barbershop",
        },
      },
    ],
  },
  pricing: {
    enabled: true,
    sectionTitle: "Costs Less Than 2 Hours of Employee Time Per Day",
    sectionSubtitle: "Handles thousands of conversations. Never calls in sick. Never needs a break.",
    plans: [
      {
        name: "Starter",
        price: "$49",
        period: "/month",
        description: "For small businesses testing the waters",
        features: [
          "500 conversations/month",
          "WhatsApp + website widget",
          "FAQ automation",
          "Basic reservation handling",
          "Email support",
        ],
        cta: { text: "Start 14-Day Free Trial", href: "#signup", variant: "outline" },
      },
      {
        name: "Growth",
        price: "$99",
        period: "/month",
        description: "For busy businesses with serious volume",
        features: [
          "Unlimited conversations",
          "All channels (WhatsApp, Web, Google)",
          "Advanced AI customization",
          "Review collection + management",
          "Analytics dashboard",
          "Priority support (< 2hr response)",
        ],
        cta: { text: "Start 14-Day Free Trial", href: "#signup", variant: "primary" },
        highlighted: true,
        badge: "Most Popular",
      },
      {
        name: "Enterprise",
        price: "$249",
        period: "/month",
        description: "For multi-location businesses and franchises",
        features: [
          "Everything in Growth",
          "Multiple locations",
          "POS + CRM integrations",
          "Dedicated account manager",
          "Custom AI training",
          "API access + webhooks",
        ],
        cta: { text: "Book a Strategy Call", href: "#contact", variant: "outline" },
      },
    ],
  },
  faq: {
    enabled: true,
    sectionTitle: "Straight Answers for Busy Business Owners",
    sectionSubtitle: "No tech jargon. No sales pitch. Just the facts.",
    faqs: [
      {
        question: "How does the AI actually know about MY business?",
        answer:
          "You share your information — menu, hours, policies, FAQs, anything customers ask about. We train LocalBot specifically on YOUR business. It learns your details, your tone, even your personality. Most businesses are fully trained in under an hour.",
      },
      {
        question: "What if someone asks something the AI can't handle?",
        answer:
          "LocalBot smoothly hands off to you via notification. You can jump into any conversation anytime. And here's the magic: it learns from how you handle edge cases, getting smarter over time.",
      },
      {
        question: "Does it work with my existing reservation system?",
        answer:
          "Yes — we integrate with OpenTable, Resy, Yelp Reservations, Google Reserve, and many more. If you don't have a system, LocalBot can handle bookings directly and sync with your Google Calendar.",
      },
      {
        question: "How do the review requests actually work?",
        answer:
          "After a positive interaction — a completed reservation, a helpful answer, a smooth conversation — LocalBot asks if the customer would leave a review. One tap takes them to Google or Yelp. Timing is everything, and we've optimized it.",
      },
      {
        question: "Is there a contract or long-term commitment?",
        answer:
          "None. Month-to-month billing. Cancel with one click, no questions asked. We keep customers by delivering results, not by locking them in.",
      },
      {
        question: "We get tourists who don't speak English. Does it help?",
        answer:
          "LocalBot automatically detects the customer's language and responds fluently. Over 50 languages supported at no extra cost. Your Thai tourist gets help in Thai. Your French guest gets help in French. Everyone feels welcome.",
      },
    ],
  },
  finalCta: {
    enabled: true,
    headline: "Every Missed Message Is a Missed Customer",
    subheadline:
      "Join thousands of local businesses using LocalBot to capture every opportunity, 24/7. Start your free trial today — setup takes 15 minutes.",
    cta: { text: "Start Your Free Trial", href: "#signup", variant: "primary" },
    secondaryCta: { text: "Watch the Demo", href: "#demo", variant: "outline" },
    backgroundStyle: "gradient",
  },
  footer: {
    logo: { text: "LocalBot" },
    tagline: "Your 24/7 AI employee for local business. · A concept by Astral Integration",
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
      { platform: "facebook", href: "https://facebook.com/localbot" },
      { platform: "linkedin", href: "https://linkedin.com/company/localbot" },
    ],
    copyright: "© 2024 LocalBot. All rights reserved.",
  },
};

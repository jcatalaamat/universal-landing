# Universal Landing Page Engine

A config-driven, reusable landing page template system for multiple niches. One codebase, infinite landing pages.

## Features

- **5 Ready-to-Use Niches**: Coaches, Yoga Studios, Healers, Local Businesses, Influencers
- **8 Customizable Sections**: Hero, Problems, Solutions, How It Works, Use Cases, Pricing, FAQ, Final CTA
- **Theme System**: Per-niche colors and styling via CSS variables
- **Type-Safe Config**: Full TypeScript support with autocomplete
- **Mobile-First**: Responsive design out of the box
- **Vercel-Ready**: Deploy in one click

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## Routes

| Route | Niche |
|-------|-------|
| `/` | Coaches (default) |
| `/studios` | Yoga & Wellness Studios |
| `/healers` | Spiritual Teachers & Energy Healers |
| `/localbiz` | Restaurants, Hotels, Local Businesses |
| `/influencers` | Creators & Influencers |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home (coaches)
│   ├── globals.css         # Tailwind + theme variables
│   └── [niche]/page.tsx    # Dynamic niche routes
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer, Layout
│   ├── sections/           # Hero, Pricing, FAQ, etc.
│   ├── shared/             # CTAButton, SectionWrapper
│   ├── LandingPage.tsx     # Main composite component
│   └── ThemeProvider.tsx   # Theme context
├── config/
│   ├── types.ts            # TypeScript interfaces
│   ├── index.ts            # Config registry
│   ├── coaches.ts          # Coaches niche config
│   ├── studios.ts          # Studios niche config
│   ├── healers.ts          # Healers niche config
│   ├── localbiz.ts         # Local business config
│   └── influencers.ts      # Influencers config
└── lib/
    └── utils.ts            # Utility functions
```

## Adding a New Niche

1. **Create config file** at `config/yourniche.ts`:

```typescript
import { NicheConfig } from "./types";

export const yournicheConfig: NicheConfig = {
  slug: "yourniche",
  theme: { name: "Your Theme", style: "minimal" },
  seo: { title: "...", description: "...", keywords: [] },
  // ... rest of config
};
```

2. **Register in `config/index.ts`**:

```typescript
import { yournicheConfig } from "./yourniche";

const configs: Record<NicheSlug, NicheConfig> = {
  // ... existing
  yourniche: yournicheConfig,
};
```

3. **Add theme colors in `app/globals.css`**:

```css
[data-theme="yourniche"] {
  --primary: 200 80% 50%;
  --accent: 180 70% 45%;
}
```

4. **Update types in `config/types.ts`**:

```typescript
export type NicheSlug = "coaches" | "studios" | ... | "yourniche";
```

## Configuration Options

Each niche config includes:

- `slug` - URL path identifier
- `theme` - Colors and style
- `seo` - Title, description, keywords
- `nav` - Logo and navigation links
- `hero` - Headline, subheadline, CTAs, trust badges
- `problem` - Pain points section
- `solution` - Features/solutions grid
- `howItWorks` - Step-by-step process
- `useCases` - Use cases with testimonials
- `pricing` - Pricing plans
- `faq` - FAQ accordion
- `finalCta` - Closing call-to-action
- `footer` - Footer columns and social links

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jcatalaamat/universal-landing)

Or deploy manually:

```bash
npm i -g vercel
vercel
```

## License

MIT

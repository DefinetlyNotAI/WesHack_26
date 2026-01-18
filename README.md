# 🔮 Digital Alchemy - Wes:Hack 26

> _"Transmute curiosity into code, and code into wonders."_

A mystically-themed hackathon website for **Wes:Hack 26**, featuring an immersive alchemy-inspired design with
interactive easter eggs and engaging animations.

## About

Digital Alchemy is the official website for Wes:Hack 26, a 48-hour student hackathon taking place on **February 13-14,
2026** at Wesgreen International School, Sharjah, UAE. The site embraces an alchemical theme, transforming the typical
hackathon experience into a mystical journey of creation and innovation.

## Features

### Core Sections

- **Hero Section** - Captivating introduction with alchemy-themed visuals
- **Registration** - Participant sign-up with validation
- **Process Guide** - Step-by-step explanation of the hackathon journey
- **Schedule** - Event timeline and important dates
- **Prizes** - Showcase of rewards and recognition
- **Archives** - Gallery of past events (Checkpoint, Scrapyard, WesHack 24)
- **Team** - Meet the organizers
- **Contact** - Get in touch section

### Interactive Easter Eggs

- **Binary Rain** - Matrix-style animation effects
- **Console Messages** - Hidden messages in browser console
- **Konami Code** - Secret activation sequence
- **Random Glitch** - Mysterious visual glitches
- **Scroll Secrets** - Discoveries triggered by scrolling
- **Time Greeting** - Dynamic messages based on time of day

### Design Elements

- **Alchemy Sigils** - Custom mystical symbols and icons
- **Parchment Buttons** - Themed UI components
- **Dark Theme** - Immersive atmosphere with next-themes
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Powered by Tailwind CSS animations

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd "Digital Alchemy"
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Digital Alchemy/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── gallery/           # Event gallery page
│   └── transmutation/     # Additional page
├── components/            # React components
│   ├── easter-eggs/       # Interactive easter eggs
│   ├── sections/          # Page sections
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions
│   ├── data.ts           # Site content and configuration
│   ├── images.ts         # Image paths
│   ├── links.ts          # External links
│   ├── sigils.ts         # Alchemy symbols
│   └── ui.ts             # UI utilities
├── public/                # Static assets
│   └── images/           # Image files
├── types/                 # TypeScript type definitions
└── components.json        # shadcn/ui configuration
```

## Customization

### Site Content

All site content is centralized in `lib/data.ts`. You can easily modify:

- Event details (name, dates, location)
- Section content
- Team members
- Schedule
- Prizes
- And more...

### Images

Place images in the `public/images/` directory and reference them in `lib/images.ts`.

### Theme

Customize the theme in:

- `app/globals.css` - CSS variables and global styles
- `tailwind.config.js` - Tailwind configuration (if present)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Team

Created with ❤️ by the Wes:Hack 26 organizing team.

## Contact

For questions or inquiries about Wes:Hack 26, please visit the contact section on the website.

---

**Wes:Hack 26** - _Where digital transformation meets ancient wisdom_ ⚗

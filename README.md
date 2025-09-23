# MindReaderBio - Biotech Intelligence Platform

**Version 4.0** | Bridging Science and Markets in Biotechnology

## 🧬 Overview

MindReaderBio is a cutting-edge biotech intelligence platform that provides scientifically credible insights through advanced analytics and market research. Built with Next.js 15, featuring WebGL visualizations, and powered by Aceternity UI animations for a modern, immersive experience.

## ✨ Features

- **🎨 Modern UI**: Aceternity UI components with smooth animations
- **🧬 WebGL Visuals**: Interactive DNA helix and particle systems
- **⚡ Performance**: Next.js 15 with SSR/ISR for optimal SEO
- **📱 Responsive**: Mobile-first design with Tailwind CSS
- **🔍 SEO Optimized**: Comprehensive metadata and sitemap
- **🎯 Accessibility**: WCAG compliant with reduced motion support

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, RSC, SSR/ISR)
- **UI/Styling**: Tailwind CSS + Shadcn UI + Aceternity UI
- **Animations**: Framer Motion + Aceternity UI transitions
- **3D/WebGL**: Three.js + React Three Fiber (R3F)
- **Icons**: Tabler Icons + Lucide React
- **Deployment**: Vercel Edge

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/MindReader--Biotech.git
cd MindReader--Biotech
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── team/              # Team page
│   ├── insights/          # Insights/Blog page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form handler
│   │   ├── posts/         # Blog posts API
│   │   └── team/          # Team data API
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── loading.js         # Loading component
├── components/            # React components
│   ├── ui/                # Aceternity UI components
│   ├── dna-helix.jsx      # WebGL DNA animation
│   ├── hero-section.jsx   # Hero section
│   ├── navigation.jsx     # Navigation component
│   └── ...
└── lib/                   # Utility functions
```

## 🎨 Key Components

### WebGL DNA Helix
- Interactive 3D DNA double helix animation
- Performance optimized with reduced motion support
- Automatic quality adjustment based on device capabilities

### Aceternity UI Integration
- Aurora Background effects
- Floating navigation with hover animations
- Card hover effects for team members
- Moving border buttons
- Animated input components

### SEO & Performance
- Comprehensive metadata management
- JSON-LD structured data for articles and organization
- Optimized images and lazy loading
- Performance monitoring and auto-adjustment

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Manual Deployment
```bash
npm run build
npm start
```

## 📧 Email Configuration

The contact form uses Resend for email delivery. To set up:

1. Create a [Resend account](https://resend.com)
2. Get your API key from the dashboard
3. Add the API key to your environment variables
4. Configure your domain for email sending
- Lighthouse Score: >85
- TTFB: <1s via Vercel Edge SSR
- WebGL Load Overhead: <500ms
- Mobile-first responsive design

## 🎯 Target Audience

- Biotech Investors
- Biotech Entrepreneurs & Startups
- Industry Professionals (scientists, clinicians, analysts)
- Policymakers & Market Analysts

## 🔮 Future Enhancements

- 3D interactive biotech visualizations
- AI-driven biotech summaries
- Investor dashboards with WebGL data viz
- WebXR/AR exploration of biotech models

## 📄 License

This project is proprietary to MindReader Enterprises.

## 🤝 Contributing

This is a private project. For questions or collaboration inquiries, please contact us through the website.

---

**MindReaderBio** - Pioneering the future of biotech intelligence 🧬

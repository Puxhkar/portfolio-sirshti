📄 Product Requirements Document (PRD)

Project: Mindreaderbio.tech
Version: v4.0 (Next.js + SSR + WebGL + Aceternity UI)
Date: September 21, 2025

1. Overview

Product Name: Mindreaderbio.tech
Tagline: Bridging Science and Markets in Biotechnology

Summary:
Mindreaderbio.tech is a biotech intelligence platform powered by Next.js 15 with SSR for SEO, WebGL scientific visuals for an immersive feel, and Aceternity UI animated components for modern interactivity.
The design reflects the logo’s identity — intelligence, science, and growth — through a futuristic, clean interface.

2. Goals & Objectives

Provide scientifically credible biotech insights in a visually engaging way.

Use WebGL backgrounds to create a calming, science-inspired environment.

Improve engagement with Aceternity UI animations and interactive components.

Keep site SEO-friendly, performant, and accessible despite animations.

3. Tech Stack

Framework: Next.js 15 (App Router, RSC, SSR/ISR).

UI Styling: Tailwind CSS + Shadcn UI + Aceternity UI.

Animations: Framer Motion + Aceternity UI transitions.

WebGL / 3D: Three.js + React Three Fiber (R3F) + @react-spring/three.

CMS: Contentlayer (MDX) or Sanity for insights/blogs.

Database (future): Supabase (Postgres + Auth).

Deployment: Vercel Edge.

4. Target Audience

Biotech Investors

Biotech Entrepreneurs & Startups

Industry Professionals (scientists, clinicians, analysts)

Policymakers & Market Analysts

5. Scope
✅ In-Scope (MVP + Enhancements)

Pages

Home: Hero section with WebGL DNA helix or particle field, animated tagline, CTA button.

About: Company mission, values, clean static layout.

Team: Animated profile cards with hover effects, expandable bios.

Insights/Blog: SEO-optimized posts (SSG + ISR), animated grid reveal.

Contact: Form with animated inputs, stateful submission button.

Animations & Effects (Aceternity UI + WebGL)

Hero: Aurora / Gradient / Stars background + WebGL DNA helix/particle system.

Navigation: Floating/sticky navbar with hover border gradient.

Team: Wobble/3D cards with glowing hover borders.

Insights: Parallax scroll animations, animated entry of blog posts.

Buttons: Hover shimmer, moving border, stateful loading/success states.

Forms: Placeholder vanish inputs, animated focus effects.

Backgrounds: Subtle gradient animations, wavy backgrounds, beams for section dividers.

🚫 Out of Scope (Future)

AI-driven biotech research insights.



6. Functional Requirements
Frontend

SSR pages (Home, Team, Insights) for SEO.

WebGL elements (DNA helix, floating particles) in Hero + section transitions.

Aceternity UI components integrated for navbar, cards, buttons, forms.

Smooth page transitions (Framer Motion).

Backend (API Routes)

/api/contact → email integration via Resend/SendGrid.

/api/posts → fetch insights (CMS/Contentlayer).

/api/team → fetch team data (DB or static JSON).

7. Non-Functional Requirements

Performance:

Lighthouse > 85 (lazy load WebGL + animations).

TTFB < 1s via Vercel Edge SSR.

SEO: Metadata API, OpenGraph tags, schema.org for biotech posts.

Accessibility:

Animations respect prefers-reduced-motion.

Alt text for visuals.

High color contrast compliance.

Scalability: API + DB ready for future dashboards.

8. Success Metrics

Engagement: Avg. session > 3 mins.

Bounce rate < 35%.

Hero/WebGL adds < 500ms load overhead.

1k+ organic visitors/month in 6 months.

9. Risks & Mitigation

Heavy WebGL → slow site → Optimize assets, lazy load, use instancing.

Animations distract users → Keep subtle, science-inspired motion.

SEO drop due to JS-heavy UI → Use SSR + ISR for all critical pages.

10. Timeline
Phase	Deliverable	Timeline
Week 1	PRD + Wireframes (UI + effects mapped)	✅
Week 2	Next.js setup + Tailwind + Shadcn + Aceternity UI	
Week 3	Hero WebGL prototype + Navbar animations	
Week 4	Team cards + Insights animations + API routes	
Week 5	Forms + SEO + accessibility audit	
Week 6	Launch on Vercel	
11. Future Enhancements

3D interactive biotech visualizations (protein folding, molecules).

AI-driven biotech summaries with animated explainer visuals.

Investor dashboards with WebGL data viz.

WebXR/AR exploration of biotech models.

⚡ This PRD ensures your site is fast, SEO-optimized, and visually stunning with Next.js SSR, WebGL soothing effects, and Aceternity UI animations integrated seamlessly.
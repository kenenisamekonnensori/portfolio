export const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kenenisamekonnen/",
        icon: "Linkedin",
    },
    {
        name: "GitHub",
        url: "https://github.com/kenenisamekonnensori",
        icon: "Github",
    },
    {
        name: "X",
        url: "https://x.com/kenenisa1153",
        icon: "Twitter",
    },
];

export type ProjectCategory = "Frontend" | "Backend" | "Fullstack" | "Mobile";

export type Project = {
    id: number;
    slug: string;
    title: string;
    category: ProjectCategory;
    year: string;
    thumbnail: string;
    shortDescription: string;
    tech: string[];
    description: string;
    links: {
        demo?: string;
        repo?: string;
    };
};

export const PROJECTS: Project[] = [
    {
        id: 1,
        slug: "aurora-commerce",
        title: "Aurora Commerce",
        category: "Fullstack",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "Modern e-commerce experience with realtime inventory and personalized recommendations.",
        tech: ["Next.js", "Node", "PostgreSQL", "Stripe", "Redis"],
        description: "A full-featured storefront with multi-step checkout, Stripe payments, admin dashboards, and Redis-backed carts. Built to emulate enterprise-grade ecommerce flows with robust error states and accessibility baked in.",
        links: {
            demo: "https://aurora-demo.example.com",
            repo: "https://github.com/example/aurora-commerce",
        },
    },
    {
        id: 2,
        slug: "lumen-design-system",
        title: "Lumen Design System",
        category: "Frontend",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "Composable UI kit with theming, motion tokens, and accessible components.",
        tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        description: "Built a reusable component library with design tokens, focus management, motion presets, and dark/light theming. Documented with live examples and usage guidelines for faster product teams onboarding.",
        links: {
            demo: "https://lumen-ui.example.com",
            repo: "https://github.com/example/lumen-design-system",
        },
    },
    {
        id: 3,
        slug: "pulse-api-gateway",
        title: "Pulse API Gateway",
        category: "Backend",
        year: "2023",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "API gateway with rate limiting, auth, and observability for microservices.",
        tech: ["Node", "Express", "PostgreSQL", "Redis", "OpenAPI"],
        description: "Implemented service discovery, JWT-based auth, per-tenant throttling, and structured logging. Added health checks, tracing hooks, and OpenAPI docs to streamline onboarding for downstream teams.",
        links: {
            demo: "https://pulse-gateway.example.com",
            repo: "https://github.com/example/pulse-api-gateway",
        },
    },
    {
        id: 4,
        slug: "atlas-crm-mobile",
        title: "Atlas CRM Mobile",
        category: "Mobile",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "Cross-platform CRM app with offline-first sync and push notifications.",
        tech: ["React Native", "Expo", "SQLite", "React Query", "Firebase"],
        description: "Delivered lead pipelines, contact management, and activity timelines with offline caching and conflict resolution. Integrated push campaigns and in-app messaging for sales teams on the go.",
        links: {
            demo: "https://atlas-crm.example.com",
            repo: "https://github.com/example/atlas-crm-mobile",
        },
    },
    {
        id: 5,
        slug: "dreamcv",
        title: "DreamCV",
        category: "Fullstack",
        year: "2025",
        thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "An AI-powered resume builder that helps users create professional CVs with ease.",
        tech: ["Next.js", "Neon", "Prisma", "Gemini", "Tailwind"],
        description: "Developed an intuitive resume builder leveraging AI to assist users in crafting professional CVs effortlessly. Integrated real-time previews, customizable templates, and export options to various formats. Ensured accessibility and responsive design for a seamless user experience across devices.",
        links: {
            demo: "https://dreamcv.example.com",
            repo: "https://github.com/kenenisamekonnensori/DreamCV",
        },
    },
    {
        id: 6,
        slug: "voyage-travel-frontend",
        title: "Voyage Travel Frontend",
        category: "Frontend",
        year: "2022",
        thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "Travel discovery site with 3D cards, map overlays, and micro-interactions.",
        tech: ["Next.js", "Three.js", "Mapbox", "GSAP", "Sass"],
        description: "Crafted immersive destination pages with 3D tilt cards, map overlays, and curated itineraries. Tuned performance with code-splitting, lazy-loaded media, and compressed textures.",
        links: {
            demo: "https://voyage-travel.example.com",
            repo: "https://github.com/example/voyage-travel-frontend",
        },
    },
];

export const SKILLS = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "TypeScript",
    "Node.js",
];

export const EXPERIENCE = [
    {
        role: "Freelance Developer",
        company: "Self-Employed | upwork.com | freelancer.com",
        period: "Nov 2024 - Present",
        description: "Providing end-to-end web development services for diverse clients, specializing in building responsive and user-friendly websites and applications. Collaborating closely with clients to understand their requirements and deliver tailored solutions that meet their business goals.",
    },
    {
        role: "Software Engineering Intern",
        company: "ASTU ICT Center",
        period: "June 2025 - Sep 2025",
        description: "Contributed to the development of internal tools, applications and building of Employee performance management systems for ASTU ICT Center, focusing on enhancing functionality and user experience. Gained hands-on experience with full-stack development, working with technologies such as React, Node.js, and PostgreSQL. Collaborated with a team of developers to implement new features and fix bugs, while also participating in code reviews and team meetings.",
    },
];

// Additional stacks and tools that complement a well-rounded full‑stack profile.
export const ADDITIONAL_STACKS: { title: string; items: string[] }[] = [
    {
        title: "Backend",
        items: ["NestJS", "FastAPI", "GraphQL", "Apollo", "WebSockets"],
    },
    {
        title: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse"],
    },
    {
        title: "DevOps",
        items: ["Docker", "Kubernetes", "GitHub Actions", "Nginx", "Terraform"],
    },
    {
        title: "Cloud",
        items: ["AWS (Lambda, S3, RDS)", "Vercel", "DigitalOcean"],
    },
    {
        title: "Messaging",
        items: ["RabbitMQ", "Kafka"],
    },
    {
        title: "Auth & Security",
        items: ["OAuth2", "JWT", "NextAuth", "OWASP Practices"],
    },
    {
        title: "Testing",
        items: ["Jest", "Vitest", "Playwright", "Postman"],
    },
    {
        title: "Observability",
        items: ["Sentry", "Prometheus", "Grafana"],
    },
];

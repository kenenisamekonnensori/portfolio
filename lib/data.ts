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
        slug: "dreamcv",
        title: "DreamCV",
        category: "Fullstack",
        year: "2025",
        thumbnail: "/dream1.png",
        shortDescription: "An AI-powered resume builder that helps users create professional CVs with ease.",
        tech: ["Next.js", "Neon", "Prisma", "PostgreSQL", "Gemini", "Tailwind", "Framer Motion", "TypeScript"],
        description: "Developed an intuitive resume builder leveraging AI to assist users in crafting professional CVs effortlessly. Integrated real-time previews, customizable templates, and export options to various formats. Ensured accessibility and responsive design for a seamless user experience across devices.",
        links: {
            demo: "https://dreamcv.example.com",
            repo: "https://github.com/kenenisamekonnensori/DreamCV",
        },

    },
    {
        id: 2,
        slug: "pixai",
        title: "PixAI",
        category: "Fullstack",
        year: "2024",
        thumbnail: "/images/pixai.png",
        shortDescription: "AI image generator that lets users create stunning visuals from text prompts.",
        tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Node", "Express", "Clipdrop Api", "MongoDB"],
        description: "Built an AI-powered image generation platform enabling users to create high-quality visuals from text prompts. Implemented a user-friendly interface with real-time feedback, customizable styles, and seamless sharing options. Focused on performance optimization and scalability to handle high user demand.",
        links: {
            demo: "https://pixai-delta.vercel.app/",
            repo: "https://github.com/kenenisamekonnen/pixai-generator",
        },
    },
    {
        id: 3,
        slug: "shopgien",
        title: "ShopGien",
        category: "Frontend",
        year: "2025",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "AI-powered e-commerce platform that lets you browse products with intellegent AI",
        tech: ["Node", "Express", "MongoDB", "Redis", "Gemeni API", "Next.js", "Tailwind CSS"],
        description: "Developed an AI-driven e-commerce platform that lets users find product using there own language and letting AI to do the rest. Implemented features like intelligent search, personalized recommendations, and seamless checkout process. Focused on creating a responsive and engaging user interface to enhance the shopping experience.",
        links: {
            demo: "https://pulse-gateway.example.com",
            repo: "https://github.com/kenenisamekonnensori/ShopGien-client",
        },
    },
    {
        id: 4,
        slug: "filmpire",
        title: "Filmpire Movie",
        category: "Frontend",
        year: "2024",
        thumbnail: "/images/filmpire.jpg",
        shortDescription: "Movie search and discovery with IMDB integration and user reviews.",
        tech: ["HTML", "CSS", "JavaScript", "IMDB API"],
        description: "Developed a movie discovery website using the IMDB API to fetch movie data and display it in an engaging UI. Implemented search fuctionality, movie details pages, and user review features to enhance user interaction and experience.",
        links: {
            demo: "https://atlas-crm.example.com",
            repo: "https://github.com/kenenisamekonnen/filmpire-movie",
        },
    },
    {
        id: 5,
        slug: "e-commerce",
        title: "E-Commerce",
        category: "Fullstack",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "Modern e-commerce experience with realtime inventory and personalized recommendations.",
        tech: ["Java", "Javascript", "MySQL", "JavaScript", "React", "Springboot", "Tailwind CSS"],
        description: "A full-featured storefront with multi-step checkout, admin dashboards. Built to emulate enterprise-grade ecommerce flows with robust error states and accessibility baked in.",
        links: {
            demo: "https://e-commerce-demo.example.com",
            repo: "https://github.com/kenenisamekonnen/fullstack-project",
        },
    },
    {
        id: 6,
        slug: "shopgien",
        title: "ShopGien",
        category: "Backend",
        year: "2025",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        shortDescription: "AI-powered e-commerce platform that lets you browse products with intellegent AI",
        tech: ["Node", "Express", "MongoDB", "Redis", "Gemeni API", "Next.js", "Tailwind CSS"],
        description: "Developed an AI-driven e-commerce platform that lets users find product using there own language and letting AI to do the rest. Implemented features like intelligent search, personalized recommendations, and seamless checkout process. Focused on creating a responsive and engaging user interface to enhance the shopping experience.",
        links: {
            demo: "https://pulse-gateway.example.com",
            repo: "https://github.com/kenenisamekonnensori/ShopGien-backend",
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

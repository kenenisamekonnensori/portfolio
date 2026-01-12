'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Briefcase, User, Mail } from "lucide-react";
import { use } from "react";
import { useRouter } from "next/navigation";

const navItems = [
    { name: "Home",id: "home", href: "/", type: "section", icon: Home },
    { name: "Work",id: "work", href: "/#work", type: "section", icon: Briefcase },
    { name: "About",id: "about", href: "/about", type: "route", icon: User },
    { name: "Contact",id: "contact", href: "#contact", type: "section", icon: Mail },
];


export default function Navbar() {
    const router = useRouter();

    const scrollToSection = (item:{ name: string; id: string; href: string; type: string; icon: any }) => {
        if (item.type === "section") {
            document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
            });
        } else if (item.type === "route") {
            router.push(item.href);
        }
    }
    return (
        <motion.nav
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 h-16 z-50 border-b border-white/10 backdrop-blur bg-black/30"
        >
            <ul className="mx-auto max-w-6xl h-full flex items-center gap-6 px-6 md:px-10 text-white">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className="group relative inline-flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                            aria-label={item.name}
                            onClick={() => scrollToSection(item)}
                        >
                            <item.icon size={20} className="group-hover:text-accent transition-colors" />
                            <span className="hidden sm:inline text-sm uppercase tracking-wider font-bold">{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}

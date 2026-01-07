"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Briefcase, User, Mail } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Work", href: "/#work", icon: Briefcase },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 top-0 h-full w-20 flex flex-col justify-center items-center z-50 mix-blend-difference text-white border-r border-white/10"
        >
            <ul className="flex flex-col gap-10">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className="group relative flex items-center justify-center p-3 rounded-full hover:bg-white/10 transition-all duration-300"
                            aria-label={item.name}
                        >
                            <item.icon size={24} className="group-hover:text-accent transition-colors" />

                            {/* Tooltip */}
                            <span className="absolute left-14 px-2 py-1 bg-card text-white text-xs font-bold uppercase tracking-wider rounded opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10">
                                {item.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}

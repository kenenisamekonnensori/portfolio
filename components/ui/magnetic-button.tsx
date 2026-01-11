"use client";

import { useRef, useEffect, ReactNode, ButtonHTMLAttributes } from "react";
import gsap from "gsap";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    strength?: number; // How strong the pull is
}

export default function MagneticButton({
    children,
    className = "",
    strength = 0.5,
    ...rest
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            gsap.to(button, {
                x: x * strength,
                y: y * strength,
                duration: 0.3,
                ease: "power2.out",
            });

            if (textRef.current) {
                gsap.to(textRef.current, {
                    x: x * strength * 0.5,
                    y: y * strength * 0.5,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        };

        const handleMouseLeave = () => {
            gsap.to(button, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
            if (textRef.current) {
                gsap.to(textRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
            }
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    return (
        <button ref={buttonRef} className={`relative ${className}`} {...rest}>
            <span ref={textRef} className="relative z-10 block">
                {children}
            </span>
        </button>
    );
}

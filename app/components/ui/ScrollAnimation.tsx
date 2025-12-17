"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    animation?: "fade-in-up" | "fade-in" | "zoom-in" | "zoom-out" | "slide-in-left" | "slide-in-right";
}

const ScrollAnimation = ({ children, delay = 0, className = "", animation = "fade-in-up" }: ScrollAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: "some" });

    const variants = {
        "fade-in-up": {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        "zoom-in": {
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
        },
        "zoom-out": {
            hidden: { opacity: 0, scale: 1.05 },
            visible: { opacity: 1, scale: 1 }
        },
        "slide-in-left": {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        "slide-in-right": {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[animation] || variants["fade-in-up"]}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;

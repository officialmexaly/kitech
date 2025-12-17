import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    50: "var(--primary-50)",
                    100: "var(--primary-100)",
                    200: "var(--primary-200)",
                    300: "var(--primary-300)",
                    400: "var(--primary-400)",
                    500: "var(--primary-500)",
                    600: "var(--primary-600)",
                    700: "var(--primary-700)",
                    800: "var(--primary-800)",
                    900: "var(--primary-900)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                    teal: "var(--accent-teal)",
                    amber: "var(--accent-amber)",
                    emerald: "var(--accent-emerald)",
                    cyan: "var(--accent-cyan)",
                    purple: "var(--accent-purple)",
                    yellow: "var(--accent-yellow)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                slate: {
                    50: "var(--slate-50)",
                    100: "var(--slate-100)",
                    200: "var(--slate-200)",
                    300: "var(--slate-300)",
                    400: "var(--slate-400)",
                    500: "var(--slate-500)",
                    600: "var(--slate-600)",
                    700: "var(--slate-700)",
                    800: "var(--slate-800)",
                    900: "var(--slate-900)",
                    950: "var(--slate-950)",
                },
                success: "var(--success)",
                warning: "var(--warning)",
                error: "var(--error)",
                info: "var(--info)",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-down": {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "gradient-shift": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "float-subtle": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "pulse-subtle": {
                    "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
                    "50%": { opacity: "0.8", transform: "scale(1.02)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-1000px 0" },
                    "100%": { backgroundPosition: "1000px 0" },
                },
                "border-draw": {
                    "0%": { strokeDashoffset: "1000" },
                    "100%": { strokeDashoffset: "0" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.6s ease-out",
                "slide-up": "slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                "slide-down": "slide-down 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                "gradient-shift": "gradient-shift 8s ease infinite",
                "float-subtle": "float-subtle 6s ease-in-out infinite",
                "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
                shimmer: "shimmer 2s infinite linear",
            },
        },
    },
    plugins: [],
};
export default config;

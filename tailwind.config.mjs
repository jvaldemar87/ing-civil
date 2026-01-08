import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                blueprint: {
                    blue: '#0047AB',
                    'blue-dark': '#003380',
                    'blue-light': '#0052CC',
                },
                safety: {
                    orange: '#FF5733',
                    'orange-dark': '#CC4529',
                    'orange-light': '#FF6B4D',
                },
                background: {
                    DEFAULT: '#F8F9FA',
                    light: '#FFFFFF',
                    grid: '#E5E7EB',
                },
            },
            fontFamily: {
                sans: ['Montserrat', 'system-ui', 'sans-serif'],
                mono: ['IBM Plex Mono', 'Consolas', 'Monaco', 'monospace'],
                heading: ['Montserrat', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'blueprint-grid': `
          linear-gradient(to right, #E5E7EB 1px, transparent 1px),
          linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
        `,
            },
            backgroundSize: {
                'grid-sm': '20px 20px',
                'grid-md': '40px 40px',
                'grid-lg': '60px 60px',
            },
            borderWidth: {
                'technical': '1px',
            },
            boxShadow: {
                'blueprint': '0 4px 6px -1px rgba(0, 71, 171, 0.1), 0 2px 4px -1px rgba(0, 71, 171, 0.06)',
                'technical': '0 0 0 1px rgba(0, 71, 171, 0.2)',
            },
        },
    },
    plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: ["selector", '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                },
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '991px',
            // => @media (min-width: 991px) { ... }
      
            'xl': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            '2xl': '1200px',
            // => @media (min-width: 1536px) { ... }
          }
    },
    plugins: [],
};
export default config;

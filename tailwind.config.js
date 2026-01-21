/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#1B2132', // Dark Navy
                    secondary: '#00BBF0', // Light Blue / Accent
                    primary: '#1B2132',
                    accent: '#00BBF0',
                    white: '#FFFFFF',
                }
            }
        },
    },
    plugins: [],
}

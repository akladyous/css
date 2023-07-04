/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: [
        './**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
}

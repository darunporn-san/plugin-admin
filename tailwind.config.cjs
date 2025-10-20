/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",                  // ครอบทั้ง src
    "./node_modules/shadcn/**/*.{ts,tsx,js,jsx}" // สำหรับ shadcn/ui
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

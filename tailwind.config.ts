import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eaa-blue': '#003366',
        'eaa-yellow': '#FFD700',
        'eaa-light-blue': '#0066CC',
      },
    },
  },
  plugins: [],
}
export default config


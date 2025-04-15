import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #F2F2F2, #2B3221)',
      },
    },
  },
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [],
}

export default config
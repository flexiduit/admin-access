import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-content': 'rgb(var(--primary-content) / <alpha-value>)',
        scene: 'rgb(var(--scene) / <alpha-value>)',
        'scene-light': 'rgb(var(--scene-light) / <alpha-value>)',
        'scene-deep': 'rgb(var(--scene-deep) / <alpha-value>)',
        'scene-content': 'rgb(var(--scene-content) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-content': 'rgb(var(--accent-content) / <alpha-value>)',
        subtle: 'rgb(var(--subtle) / <alpha-value>)',
        'subtle-2': 'rgb(var(--subtle-2) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-2': 'linear-gradient(135deg, #9810FA 0%, #6B0FD0 100%)',
      },
      spacing: {
        gutter: '1.25rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  // Define which files Tailwind should scan for class usage
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // Define your theme customizations
  theme: {
    extend: {
      // Colors that work well for a research blog
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      
      // Typography plugin customizations
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'var(--foreground)',
            a: {
              color: 'var(--colors-primary-600)',
              '&:hover': {
                color: 'var(--colors-primary-700)',
              },
            },
            h1: {
              color: 'var(--foreground)',
            },
            h2: {
              color: 'var(--foreground)',
            },
            h3: {
              color: 'var(--foreground)',
            },
            code: {
              color: 'var(--foreground)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
          },
        },
      },
    },
  },
  
  // Include plugins
  plugins: [
    // For ES Modules, we need to use a dynamic import approach
    // or the CommonJS require approach wrapped in a function
    require('@tailwindcss/typography')
  ],
  
  // Optional darkMode configuration
  darkMode: 'media', // Use 'class' if you want to manually toggle dark mode
}
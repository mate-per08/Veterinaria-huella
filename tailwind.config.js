/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salvia: {
          light: '#C2D1BC',
          DEFAULT: '#8FA58A',
          dark: '#6F856A',
          subtle: '#EBF1E9',
          50: '#F4F7F2',
          100: '#E8EFE5',
          200: '#D2DFCDBD',
          300: '#B5C9AF',
          400: '#9DB697',
          500: '#8FA58A',
          600: '#73896E',
          700: '#586A54',
          800: '#3E4B3B',
          900: '#273025',
        },
        crema: {
          light: '#FAF7F2',
          DEFAULT: '#F6F1E7',
          dark: '#EAE2D2',
          muted: '#E2D9C7',
        },
        forest: {
          light: '#365143',
          DEFAULT: '#24372D',
          dark: '#17241D',
          deep: '#0F1813',
        },
        terracota: {
          light: '#E59475',
          DEFAULT: '#C8714F',
          hover: '#B25F3E',
          subtle: '#F8ECE7',
          50: '#FCF5F2',
          100: '#F7E7E0',
          500: '#C8714F',
          600: '#B25F3E',
          700: '#944C2F',
        },
        warmwhite: '#FFFDF8',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 55, 45, 0.05), 0 2px 6px -1px rgba(36, 55, 45, 0.03)',
        'soft-lg': '0 12px 32px -4px rgba(36, 55, 45, 0.08), 0 4px 12px -2px rgba(36, 55, 45, 0.04)',
        'soft-xl': '0 20px 40px -8px rgba(36, 55, 45, 0.12), 0 8px 16px -4px rgba(36, 55, 45, 0.06)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#1E3A8A',
        secondary: '#10B981',
      },
      textColor: {
        primary: '#1E3A8A',
        secondary: '#10B981',
      },
      borderColor: {
        primary: '#1E3A8A',
        secondary: '#10B981',
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: 'bg-primary',
          textColor: 'text-white',
          padding: 'px-4 py-2',
          borderRadius: 'rounded',
          hoverBgColor: 'hover:bg-primary-darker',
        },
        secondary: {
          backgroundColor: 'bg-secondary',
          textColor: 'text-white',
          padding: 'px-4 py-2',
          borderRadius: 'rounded',
          hoverBgColor: 'hover:bg-secondary-darker',
        },
      },
    },
  },
  plugins: [],
}


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        boxShadow: {
          // Custom shadows 1-15
          '1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          '2': '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
          '3': '0 4px 8px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.1)',
          '4': '0 6px 12px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
          '5': '0 8px 16px rgba(0,0,0,0.15), 0 6px 12px rgba(0,0,0,0.1)',
          '6': '0 10px 20px rgba(0,0,0,0.15), 0 6px 12px rgba(0,0,0,0.1)',
          '7': '0 12px 24px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1)',
          '8': '0 16px 32px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)',
          '9': '0 20px 40px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.1)',
          '10': '0 24px 48px rgba(0,0,0,0.15), 0 16px 32px rgba(0,0,0,0.1)',
          '11': '0 30px 60px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.1)',
          '12': '0 40px 80px rgba(0,0,0,0.15), 0 24px 48px rgba(0,0,0,0.1)',
          '13': '0 50px 100px rgba(0,0,0,0.15), 0 30px 60px rgba(0,0,0,0.1)',
          '14': '0 60px 120px rgba(0,0,0,0.15), 0 40px 80px rgba(0,0,0,0.1)',
          '15': '0 80px 160px rgba(0,0,0,0.15), 0 50px 100px rgba(0,0,0,0.1)',
          
          // Additional custom shadows
          'soft': '0 2px 8px rgba(0,0,0,0.08)',
          'glow': '0 0 20px rgba(59,130,246,0.3), 0 0 40px rgba(59,130,246,0.1)',
          'neon': '0 0 10px rgba(168,85,247,0.5), 0 0 20px rgba(168,85,247,0.3)',
          'elevated': '0 8px 30px rgba(0,0,0,0.12)',
        },
      },
    },
    plugins: [],
  }
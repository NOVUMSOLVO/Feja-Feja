/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zimbabwe': {
          green: '#009639',
          yellow: '#FFD100',
          red: '#DE2910',
          gold: '#FFB800',
          dark: '#1a1a1a',
        },
        'casino': {
          primary: '#1a1a2e',
          secondary: '#16213e',
          accent: '#e94560',
          gold: '#FFB800',
          success: '#00C896',
          warning: '#FFB800',
          error: '#FF6B6B',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'zimbabwe-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFB800\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-gold': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FFB800, 0 0 10px #FFB800, 0 0 15px #FFB800' },
          '100%': { boxShadow: '0 0 10px #FFB800, 0 0 20px #FFB800, 0 0 30px #FFB800' }
        }
      }
    },
  },
  plugins: [],
};

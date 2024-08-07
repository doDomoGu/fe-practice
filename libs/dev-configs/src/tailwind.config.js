// import { blackA, green, grass, mauve } from '@radix-ui/colors'
const { blackA } = require('@radix-ui/colors')
const path = require('path')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,vue,tsx,ts,jsx}',
    path.join(
      path.dirname(require.resolve('@dodomogu/ui-vue')),
      './src/**/*.{html,js,vue}'
    )
    // path.join(path.dirname(require.resolve('@data-visualization/ui')), './src/**/*.{html,js,vue}')
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        'app-bg': '#ffffff',
        'app-text': '#333333',
        'app-bg-dark': '#273444',
        'app-text-dark': '#ffffff'
      },
      fontFamily: {
        text: 'PingFang',
        number: 'Consolas, Menlo, Arial'
      }
      //   colors: {
      //     ...blackA,
      //     ...green,
      //     ...grass,
      //     ...mauve
      //   },
      //   keyframes: {
      //     slideDownAndFade: {
      //       from: { opacity: 0, transform: 'translateY(-2px)' },
      //       to: { opacity: 1, transform: 'translateY(0)' }
      //     },
      //     slideLeftAndFade: {
      //       from: { opacity: 0, transform: 'translateX(2px)' },
      //       to: { opacity: 1, transform: 'translateX(0)' }
      //     },
      //     slideUpAndFade: {
      //       from: { opacity: 0, transform: 'translateY(2px)' },
      //       to: { opacity: 1, transform: 'translateY(0)' }
      //     },
      //     slideRightAndFade: {
      //       from: { opacity: 0, transform: 'translateX(-2px)' },
      //       to: { opacity: 1, transform: 'translateX(0)' }
      //     }
      //   },
      //   animation: {
      //     slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      //     slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      //     slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      //     slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
      //   }
    }
  },
  plugins: []
}

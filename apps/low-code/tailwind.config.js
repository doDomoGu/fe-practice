import commonConfig from '@dodomogu/dev-configs/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [commonConfig],
  theme: {
    extend: {
      colors: {
        // 'body-bg': '#27F444'
      }
    }
  }
}

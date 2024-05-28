import commonConfig from '@dodomogu/dev-configs/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [commonConfig],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}

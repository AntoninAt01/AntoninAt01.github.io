/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Primary: '#C5FC59',
				White: '#FDFDFD',
				Black: '#000E17',
				Black2: '#212121',
			},
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

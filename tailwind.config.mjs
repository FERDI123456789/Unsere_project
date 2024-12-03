/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors:{
				
					light:"#f5f5f5",
					dark:"#1b1b1b",
					secondary:"#B4B4B4",
					primary:"#0090FF",

				
			}
		},
	},
	plugins: [],
}

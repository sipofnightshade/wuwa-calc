import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {},
			fontFamily: {
				sans: ['Palanquin', ...defaultTheme.fontFamily.sans]
			}
		},
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1280px'
			}
		}
	},

	plugins: []
} as Config;

module.exports = {
	content: [
	  "./components/**/*.{js,vue,ts}",
	  "./layouts/**/*.vue",
	  "./pages/**/*.vue",
	  "./plugins/**/*.{js,ts}",
	  "./content/**/*.md",
	  "./app.vue",
	  "./error.vue",
	],
	theme: {
		fontFamily: {
			sans: [
				'Roboto',
				'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'
			]
		},
		extend: {
			spacing: {
				'100': '25rem',
				'200': '50rem',
				'300': '75rem',
				'400': '100rem',
			},
			aspectRatio: {
				'4/5': '4 / 5',
			},
			width: {
				'248': '62rem',
			},
		},
	},
	plugins: [
		require('tailwindcss-textshadow'),
	],
  }
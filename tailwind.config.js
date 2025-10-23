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
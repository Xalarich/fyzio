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
		extend: {
			spacing: {
				'100': '25rem',
			},
			aspectRatio: {
				'4/5': '4 / 5',
			},
		},
	},
	plugins: [
		require('tailwindcss-textshadow'),
	],
  }
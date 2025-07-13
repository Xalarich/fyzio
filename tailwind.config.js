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
	},
	plugins: [
		require('tailwindcss-textshadow'),
	],
  }
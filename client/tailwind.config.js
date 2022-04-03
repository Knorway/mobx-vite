module.exports = {
	content: ['./templates/**/*.{html,js,ts}', './scripts/**/*.{html,js,ts}'],
	theme: {
		// fontFamily: {
		// 	sans: ['system-ui'],
		// },
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};

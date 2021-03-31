module.exports = {
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			primary: '#00CBA9',
			secondary: '#ededed',
			black: '#000000',
			gray: '#302D2D'
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};

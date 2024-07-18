/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		fontFamily: {
			sans: ["Inter"],
		},
		boxShadow: {
			left: "-7px 0 7px -2px rgba(0, 0, 0, 0.1)",
			bottom: "0 7px 7px -2px rgba(0, 0, 0, 0.1)",
			none: "",
		},
		options: {
			safelist: ["scroll-smooth"],
		},
	},
	plugins: [],
};

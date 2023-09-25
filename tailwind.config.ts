import type { Config } from 'tailwindcss'

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		colors: {
			primaire: '#d2f7fa',
			secondaire: '#36b3a2',
			action: '#7d3929',
			blanc: '#fcfcff',
			noir: '#040f0f',
			primairevar: '#B3E3DA',
			secondairevar: '#32B4C9',
			bleu: '#32cbff'
		},
		extend: {},
	},
	plugins: [],
} satisfies Config
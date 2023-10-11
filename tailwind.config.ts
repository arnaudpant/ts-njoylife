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
			primairevar: '#f5f6fa',
			secondairevar: '#43E0CB',
			bleu: '#32cbff'
		},
		extend: {
			boxShadow: {
				'card': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
			}
		},
	},
	plugins: [],
} satisfies Config
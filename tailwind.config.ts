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
			primairevar: '#E8F7FA',
			secondairevar: '#43E0CB',
			bleu: '#32cbff'
		},
		extend: {
			boxShadow: {
				'card': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
			},
			keyframes: {
				plumerotate: {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(30deg)' },
					'75%': { transform: 'rotate(-60deg)' },
					'100%': { transform: 'rotate(0deg)' },
				}
			},
		},
	},
	plugins: [],
} satisfies Config



import type { Config } from 'tailwindcss'

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		
		fontFamily: {
			'title': ['Bitter']
		},
		colors: {
			primaire: '#d2f7fa',
			secondaire: '#36b3a2',
			action: '#7d3929',
			blanc: '#fcfcff',
			noir: '#040f0f',
			primairevar: '#E8F7FA',
			secondairevar: '#43E0CB',
			bleu: '#32cbff',
			tealA: '#fafefd', // Text
			tealB: '#f3fbf9', // Bg clair
			tealC: '#e0f8f3', // Bg Fonce
			tealD: '#ccf3ea',
			tealE: '#b8eae0',
			tealF: '#a1ded2',
			tealG: '#83cdc1',
			tealH: '#53b9ab',
			tealI: '#12a594', // Header
			tealJ: ' #0d9b8a',
			tealK: ' #008573',
			tealL: ' #0d3d38',
			sage1: '#00804004',
			sage11: '#000a07a0',
			sage12: '#000805e5',
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
			backgroundImage: {
				'page-nutrition': "url('/photos/page-nutrition.jpg')",
				'page-stress': "url('/photos/page-stress.jpg')",
				'page-sport': "url('/photos/page-sport.jpg')",
				'page-californien': "url('/photos/massage/page-californien.jpg')",
				'page-infini': "url('/photos/massage/page-infini.jpg')",
				'page-kansu': "url('/photos/massage/page-kansu.jpg')",
				'page-dienchan': "url('/photos/massage/page-dienchan.jpg')",
				'page-chinei': "url('/photos/massage/page-chinei.jpg')",
				'page-sonore': "url('/photos/massage/sonore.png')",
			}
		},
	},
	plugins: [],
} satisfies Config



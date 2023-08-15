// https://nuxt.com/docs/api/configuration/nuxt-config

//npm install -D @nuxtjs/google-fonts
//npm install --save-dev nuxt-icon

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/google-fonts', 'nuxt-icon'],
	googleFonts: {
		families: {
			'Alegreya Sans': {
				wght: [100, 300, 400, 500, 700, 800],
				ital: [300],
			},
		},
	},
});

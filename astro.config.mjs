// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Virtual Office Group',
			defaultLocale: 'es',
			locales: {
				root: {
				label: 'Español',
				lang: 'es', // Código de idioma
				},
			},
			credits: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ProgramadorVOG' }],
			sidebar: [
				{
					label: 'Codigo AL',
					collapsed: false,
					items:[
						{
							label: 'Documentación',
							collapsed: false,
							items:[
								{
									label: 'Conceptos Basicos',
									collapsed: false,
									autogenerate: { directory: 'al/documentation/basic' }
								},
							]
						},
						{
							label: 'Guia de desarrollo',
							collapsed: false,
							autogenerate: { directory: 'al/guides' }
						},
						{
							label: 'Publicar en Microsoft AppSource',
							collapsed: false,
							autogenerate: { directory: 'al/publish' },
						},
						{
							label: 'Referencias',
							collapsed: false,
							autogenerate: { directory: 'al/reference' },
						},
					]
				},
			],
		}),
	],
	site: 'https://ProgramadorVOG.github.io',
  	base: '/vog-docs/',
});

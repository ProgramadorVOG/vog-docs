// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Virtual Office Group',
			defaultLocale: 'es',
			credits: false,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ProgramadorVOG' }],
			sidebar: [
				{
					label: 'Codigo AL',
					collapsed: false,
					items:[
						{
							label: 'Guia de desarrollo',
							collapsed: false,
							autogenerate: { directory: 'al/guides' }
						},
						{
							label: 'Publicar en Microsoft AppSource',
							collapsed: false,
							autogenerate: { directory: 'publish' },
						},
						{
							label: 'Referencias',
							collapsed: false,
							autogenerate: { directory: 'reference' },
						},
					]
				},
			],
		}),
	],
	site: 'https://ProgramadorVOG.github.io',
  	base: '/vog-docs/',
});

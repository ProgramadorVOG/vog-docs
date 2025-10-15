// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/src/assets/logo.jpg',
			title: 'Documentación',
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
					label: 'Introducción',
					link: 'introduction',
				},
				{
					label: 'Código AL',
					collapsed: false,
					items:[
						{
							label: 'Inicio',
							collapsed: false,
							items:[
								{
									label: 'Instalar ambiente de desarrollo',
									link: 'al/documentation/starting/install'
								},
								{
									label: 'Crear una nueva extensión',
									link: 'al/documentation/starting/create_extension'
								},
								{
									label: 'Crear aplicación para producción',
									link: 'al/documentation/starting/create_app'
								},
							]
						},
						{
							label: 'Documentación',
							collapsed: false,
							items:[
								{
									label: 'Conceptos Basicos',
									collapsed: false,
									autogenerate: { directory: 'al/documentation/basic' }
								},
								{
									label: 'Instrucciones (Iteradores)',
									link: 'al/documentation/interation'
								},
								{
									label: 'Instrucciones (Condicionales)',
									link: 'al/documentation/condition'
								},
								{
									label: 'Metodos de Interacción',
									link: 'al/documentation/input'
								},
								{
									label: 'Funciones de Cadena de texto',
									link: 'al/documentation/string'
								},
								{
									label: 'Fechas',
									link: 'al/documentation/date'
								},
								{
									label: 'Funciones Numericas',
									link: 'al/documentation/numeric'
								},
								{
									label: 'Funciones de Arreglos',
									link: 'al/documentation/array'
								},
								{
									label: 'Funciones de Listas',
									link: 'al/documentation/list'
								},
								{
									label: 'Funciones de Sistema',
									link: 'al/documentation/system'
								},
								{
									label: 'Funciones de Variables',
									link: 'al/documentation/variable'
								},
								{
									label: 'Gestión de errores',
									link: 'al/documentation/errors'
								},
								{
									label: 'Procedimientos (Funciones)',
									link: 'al/documentation/procedure'
								},
								{
									label: 'Codeunit',
									link: 'al/documentation/codeunit'
								},
								{
									label: 'Eventos y desencadenadores',
									link: 'al/documentation/events'
								},
								{
									label: 'Interfaces',
									link: 'al/documentation/interfaces'
								},
								{
									label: 'Manipular datos',
									link: 'al/documentation/data'
								},
								{
									label: 'Idiomas',
									link: 'al/documentation/language'
								},
								{
									label: 'Servicios web',
									link: 'al/documentation/webservices'
								},
								{
									label: 'Manejo de JSON',
									link: 'al/documentation/json'
								},
								{
									label: 'Funciones Extras',
									collapsed: false,
									autogenerate: { directory: 'al/documentation/procedureInternal' }
								},
							]
						},
						{
							label: 'Guia de desarrollo',
							collapsed: false,
							autogenerate: { directory: 'al/guides' }
						},
						{
							label: 'Publicar en AppSource',
							collapsed: false,
							autogenerate: { directory: 'al/publish' },
						},
						{
							label: 'Referencias',
							collapsed: false,
							autogenerate: { directory: 'al/reference' },
						}
					]
				},
			],
		}),
	],
	site: 'https://ProgramadorVOG.github.io',
  	base: '/vog-docs/',
});

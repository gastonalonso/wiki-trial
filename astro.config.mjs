// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages serves this site at https://gastonalonso.github.io/wiki-trial/,
// so every page lives under the /wiki-trial base path.
export default defineConfig({
	site: 'https://gastonalonso.github.io',
	base: '/wiki-trial',
	integrations: [
		starlight({
			title: 'Wiki Trial',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/gastonalonso/wiki-trial' }],
			sidebar: [{ label: 'Articles', items: [{ autogenerate: { directory: 'articles' } }] }],
		}),
	],
});

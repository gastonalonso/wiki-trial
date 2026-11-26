// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/** A collapsed sidebar group listing every page in one folder. */
const folder = (label, directory) => ({
	label,
	collapsed: true,
	items: [{ autogenerate: { directory } }],
});

// GitHub Pages serves this site at https://gastonalonso.github.io/wiki-trial/,
// so every page lives under the /wiki-trial base path.
export default defineConfig({
	site: 'https://gastonalonso.github.io',
	base: '/wiki-trial',
	integrations: [
		starlight({
			title: 'Wiki Trial',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/gastonalonso/wiki-trial' }],
			// Each page shows the date of the last commit that changed it.
			lastUpdated: true,
			// Starlight labels a folder's group with the folder's name, so every
			// group is named here. A folder added from the CMS needs a line here too.
			sidebar: [
				{
					label: 'Physical geography',
					items: [
						{ label: 'Overview', slug: 'physical' },
						folder('Landforms', 'physical/landforms'),
						folder('Water', 'physical/water'),
						folder('Climate', 'physical/climate'),
						folder('Biomes', 'physical/biomes'),
					],
				},
				{
					label: 'Continents and countries',
					items: [
						{ label: 'Overview', slug: 'world' },
						folder('Africa', 'world/africa'),
						folder('Asia', 'world/asia'),
						folder('Europe', 'world/europe'),
						folder('North America', 'world/north-america'),
						folder('South America', 'world/south-america'),
						folder('Oceania', 'world/oceania'),
						{ label: 'Antarctica', slug: 'world/antarctica' },
					],
				},
				folder('Famous places', 'places'),
				folder('Human geography', 'human'),
				folder('Reference', 'reference'),
			],
		}),
	],
});

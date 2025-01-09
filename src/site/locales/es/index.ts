import type { LocalizedSite } from '../../../i18n';

import * as latest from './latest';
import * as v071beta from './v0.7.1-beta';

export default <LocalizedSite>{
	title: 'Documentación de Intersect',
	description:
		'El creador moderno de MMORPG 2D gratuito y de código abierto.',
	components: {
		HashGenerator: {
			digestPlaceholder:
				'This will update with the hash once input is provided',
			inputPlaceholder:
				'Input text to be hashed (this is treated like a password!)',
		},
		Search: {
			DisplayError: 'Display error, please try refreshing the page!',
			Empty: 'There are no results, try typing something else to search!',
			FailedToLoadSearchIndex: 'Failed to load search index! Please try refreshing the page.',
			NoSearchIndexForLanguage: 'Search is not available for this language!',
			NoSearchIndexForVersion: 'There is no search index for the specified version of the engine.',
			OpenSearch: 'Open Search',
		},
		VersionPicker: { Latest: 'Ultima' },
	},
	general: {
		EditThisPage: 'Edit this page',
		JoinOurCommunity: 'Join our Discord',
		OnThisPage: 'En esta página',
		More: 'Más',
	},
	navbar: {
		latest: latest.navbar,
		'v0.7.1-beta': v071beta.navbar,
	},
	sidebar: {
		latest: latest.sidebar,
		'v0.7.1-beta': v071beta.sidebar,
	},
};

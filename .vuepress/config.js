module.exports = {
    base: '/',
    title: 'Intersect Documentation',
    description: 'The free, open-source, modern 2d mmorpg maker.',
    ga: '',
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#0e4688' }],
        ['link', { rel: 'manifest', href: '/favicons/manifest.json' }],
        ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
        ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
    ],
    postcss: {
        plugins: [
            require('css-prefers-color-scheme/postcss'),
            require('autoprefixer')
        ]
    },
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        defaultTheme: 'dark',
        repo: 'AscensionGameDev/Intersect-Engine',
        docsRepo: 'AscensionGameDev/Intersect-Documentation',
        docsDir: '',
        docsBranch: 'master',
        editLinks: true,
        logo: 'https://www.ascensiongamedev.com/resources/filehost/e37ded2fa492ae07375cd18bd1d8312c.png',
        smoothScroll: true,

        editLinkText: 'Help us improve this page.',
        nav: [
            {
                text: 'User Docs',
                link: '/',
            },
            {
                text: 'API Reference',
                link: '/api/v1/',
            },
            {
                text: 'Developer Guides',
                link: '/dev/',
            },
            {
                text: 'Support Community',
                link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/'
            }
        ],
        sidebar: {
            '/api/v1/': [
                {
                    title: 'API Information',
                    collapsable: true,
                    children: [
                        '/api/v1/',
                        '/api/v1/introduction/setup.md',
                        '/api/v1/introduction/config.md',
                        '/api/v1/introduction/roles.md'
                    ]
                },
                {
                    title: 'Endpoints',
                    collapsable: true,
                    children: [
                        '/api/v1/endpoints/authentication.md',
                        '/api/v1/endpoints/admin.md',
                        '/api/v1/endpoints/chat.md',
                        '/api/v1/endpoints/info.md',
                        '/api/v1/endpoints/gameobjects.md',
                        '/api/v1/endpoints/users.md',
                        '/api/v1/endpoints/players.md',
                        '/api/v1/endpoints/variables.md',
                    ]
                },
                {
                    title: 'Advanced',
                    collapsable: true,
                    children: [
                        '/api/v1/advanced/securing.md',
                    ]
                },
            ],
            '/dev/': [
                {
                    title: 'Developer Information',
                    collapsable: true,
                    children: [
                        '/dev/',
                    ]
                },
                {
                    title: 'Getting Started',
                    collapsable: true,
                    children: [
                        '/dev/start/vs.md',
                        '/dev/start/github.md',
                        '/dev/start/compiling.md',
                        '/dev/start/layout.md',
                    ]
                },
                {
                    title: 'Making Changes',
                    collapsable: true,
                    children: [
                        '/dev/modify/procedure.md',
                        '/dev/modify/merging.md',
                        '/dev/modify/conflicts.md',
                    ]
                },
                {
                    title: 'Staying up to Date',
                    collapsable: true,
                    children: [
                        '/dev/pullrequests/pulling.md',
                    ]
                },
                {
                    title: 'Sharing & Contributions',
                    collapsable: true,
                    children: [
                        '/dev/sharing/creating.md',
                        '/dev/sharing/applying.md',
                        '/dev/sharing/contributing.md',
                    ]
                },
                {
                    title: 'Advanced',
                    collapsable: true,
                    children: [
                        '/dev/advanced/database.md',
                        '/dev/advanced/packets.md',
                        '/dev/advanced/eventcommands.md',
                    ]
                },
            ],
            '/': [
                {
                    title: 'Project Information',
                    collapsable: true,
                    children: [
                        '/',
                        '/project/about.md',
                    ]
                },
                {
                    title: 'Getting Started',
                    collapsable: true,
                    children: [
                        '/start/download.md',
                        '/start/setup.md',
                        '/start/login.md',
                        '/start/overview.md',
                    ]
                },
                {
                    title: 'Editors',
                    collapsable: true,
                    children: [
                        '/design/animations.md',
                        '/design/classes.md',
                        '/design/conditions.md',
                        '/design/crafting.md',
                        '/design/items.md',
                        '/design/lighting.md',
                        '/design/mapping.md',
                        '/design/npcs.md',
                        '/design/projectiles.md',
                        '/design/quests.md',
                        '/design/resources.md',
                        '/design/shops.md',
                        '/design/spells.md',
                        '/design/resources.md',
                        '/design/time.md',
                        '/design/world.md',
                    ]
                },
                {
                    title: 'Events',
                    collapsable: true,
                    children: [
                        '/events/introduction.md',
                        '/events/commands.md',
                        '/events/pages.md',
                        '/events/common.md',
                        '/events/examples.md',
                    ]
                },
                {
                    title: 'Configuration',
                    collapsable: true,
                    children: [
                        '/configuration/client-editor.md',
                        '/configuration/server.md',
                        '/configuration/server-database.md',
                        '/configuration/server-security.md',
                        '/configuration/equipment.md',
                        {
                            title: 'Advanced',
                            collapsable: true,
                            children: [
                                '/advanced/assets.md',
                                '/advanced/fonts.md',
                                '/advanced/formulas.md',
                                '/advanced/translations.md',
                                '/advanced/interface.md',
                                '/advanced/zdimensions.md',
                                '/advanced/sizes.md',
                                '/advanced/passwords.md',
                            ]
                        }
                    ]
                },
                {
                    title: 'Deployment',
                    collapsable: true,
                    children: [
                        '/deploy/forwarding.md',
                        '/deploy/packing.md',
                        '/deploy/distributing.md',
                        '/deploy/autoupdater.md'
                    ]
                },
                {
                    title: 'Upgrading',
                    collapsable: true,
                    children: [
                        '/upgrade/upgrading.md',
                    ]
                },
            ],
        },
    },
};

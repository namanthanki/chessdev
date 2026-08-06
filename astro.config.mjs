import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://chessdev.org',
  output: 'static',
  integrations: [
    starlight({
      title: 'chessdev.org',
      description: 'A community-run chess engine programming reference.',
      defaultLocale: 'root',
      disable404Route: true,
      favicon: '/favicon.svg',
      editLink: {
        baseUrl: 'https://github.com/chessdev-org/chessdev.org/edit/main/',
      },
      components: {
        PageTitle: './src/components/ArticlePageTitle.astro',
      },
      customCss: ['./src/styles/site.css'],
      sidebar: [
        {
          label: 'Start',
          items: [
            { label: 'Home', link: '/' },
            { label: 'Contribute', link: '/contribute/' },
          ],
        },
        {
          label: 'Topics',
          items: [
            { label: 'Board representation', link: '/topics/board-representation/' },
            { label: 'Move generation', link: '/topics/move-generation/' },
            { label: 'Search', link: '/topics/search/' },
            { label: 'Evaluation', link: '/topics/evaluation/' },
            { label: 'Endgames', link: '/topics/endgames/' },
            { label: 'Engines', link: '/topics/engines/' },
          ],
        },
        {
          label: 'Articles',
          collapsed: false,
          items: [
            { autogenerate: { directory: 'board-representation' } },
            { autogenerate: { directory: 'move-generation' } },
            { autogenerate: { directory: 'search' } },
            { autogenerate: { directory: 'evaluation' } },
            { autogenerate: { directory: 'endgames' } },
            { autogenerate: { directory: 'engines' } },
          ],
        },
      ],
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['c', 'cpp', 'rust', 'python', 'go', 'javascript'],
    },
  },
});

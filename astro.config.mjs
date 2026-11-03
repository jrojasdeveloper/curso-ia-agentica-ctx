import { defineConfig } from 'astro/config';

// GitHub Pages serves project sites under /<repo>/; local dev stays at /.
const repository = 'curso-ia-agentica-ctx';

export default defineConfig({
  site: 'https://jrojasdeveloper.github.io',
  base: process.env.GITHUB_ACTIONS ? `/${repository}` : '/',
  output: 'static',
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// 상대 경로 base — 저장소 이름과 무관하게 GitHub Pages(프로젝트 사이트),
// 사용자 사이트, 로컬 preview 모두에서 자산 경로가 올바르게 잡힌다.
// HashRouter 를 쓰므로 새로고침 시 404 문제도 없다.
export default defineConfig({
  base: './',
  plugins: [
    { enforce: 'pre', ...mdx({ remarkPlugins: [remarkGfm], providerImportSource: '@mdx-js/react' }) },
    react({ include: /\.(jsx|tsx|mdx)$/ }),
    vanillaExtractPlugin(),
  ],
});

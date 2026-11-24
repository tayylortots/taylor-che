import { defineConfig, normalizePath, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Maps figma:asset/<name>.<ext> imports to real files in src/assets.
// Images are emitted as normal hashed files and only downloaded when shown
// (they are NOT embedded in the JavaScript bundle).
// If a .webp version of an image exists next to the original, it is used instead.
function figmaAssetPlugin(): Plugin {
  const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
  return {
    name: 'figma-asset-resolver',
    enforce: 'pre',
    resolveId(id) {
      if (!id.startsWith('figma:asset/')) return null;
      const filename = id.slice('figma:asset/'.length);
      const baseName = filename.replace(/\.[^.]+$/, '');
      const candidates = [
        baseName + '.webp',
        filename,
        baseName + '.jpeg',
        baseName + '.jpg',
        baseName + '.png',
        baseName + '.gif',
      ];
      for (const candidate of candidates) {
        const localPath = path.resolve(__dirname, 'src/assets', candidate);
        if (fs.existsSync(localPath)) {
          return normalizePath(localPath);
        }
      }
      console.warn(`[figma-asset] Missing asset: ${filename}, using placeholder`);
      return '\0figma-placeholder:' + filename;
    },
    load(id) {
      if (id.startsWith('\0figma-placeholder:')) {
        return `export default '${PLACEHOLDER}';`;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

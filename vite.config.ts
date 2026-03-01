import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return '\0figma-asset:' + id.slice('figma:asset/'.length);
      }
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        const filename = id.slice('\0figma-asset:'.length);
        const baseName = filename.replace(/\.[^.]+$/, '');

        // Try the exact filename first, then common alternative extensions
        const candidates = [
          filename,
          baseName + '.jpeg',
          baseName + '.jpg',
          baseName + '.png',
          baseName + '.gif',
          baseName + '.webp',
        ];

        for (const candidate of candidates) {
          const localPath = path.resolve(__dirname, 'src/assets', candidate);
          if (fs.existsSync(localPath)) {
            const data = fs.readFileSync(localPath);
            const base64 = data.toString('base64');
            const ext = candidate.split('.').pop()?.toLowerCase();
            const mime = ext === 'gif' ? 'image/gif' : (ext === 'jpg' || ext === 'jpeg') ? 'image/jpeg' : 'image/png';
            return `export default 'data:${mime};base64,${base64}';`;
          }
        }

        // Placeholder for truly missing assets
        console.warn(`[figma-asset] Missing asset: ${filename}, using placeholder`);
        return `export default 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='`;
      }
    },
  }
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

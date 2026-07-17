import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Windows filesystems are case-insensitive, so uploaded images can end up
  // with uppercase extensions (e.g. .JPG). Vite's default asset matching is
  // case-sensitive, so we explicitly include the uppercase variants too.
  base: process.env.VITE_BASE_PATH || "/ngun--vuthy--web",
});

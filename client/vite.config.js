import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mern-stack-integration-Jason-W-K/', // 👈 my repo name
});
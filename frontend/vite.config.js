import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Redireciona as chamadas da API para o backend durante o desenvolvimento
    proxy: {
      '/chat': 'http://localhost:3000'
    }
  }
});

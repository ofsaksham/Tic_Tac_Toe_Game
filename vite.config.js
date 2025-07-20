import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Tic_Tac_Toe_Game/',  // 👈 must match your repo name exactly
  plugins: [react()]
});

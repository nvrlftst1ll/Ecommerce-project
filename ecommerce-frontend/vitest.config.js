
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // 1. Указываем среду браузера
    environment: 'jsdom', 
    
    // 2. Подключаем файл настройки (создадим его на следующем шаге)
    setupFiles: './src/setupTests.ts',
    
    // Опционально: позволяет использовать describe/it/expect без импортов
    globals: true, 
  },
});
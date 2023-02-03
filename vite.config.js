﻿import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */

export default defineConfig(({ command, mode, ssrBuild }) => {
    var isDev = command === 'serve'
    return {
            plugins: [react()],
            base: isDev ? undefined : '/Feliz.DaisyUI/',
            root: "./src/Docs",
            server: {
            port: 8080,
            proxy: {
            '/api': 'http://localhost:5000',
        }
        },
            build: {
            outDir:"../../publish/docs"
        }

    }
})
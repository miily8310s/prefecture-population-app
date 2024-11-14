/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		root: "src/",
		setupFiles: ["./vitest.setup.ts"],
		env: loadEnv(mode, process.cwd(), ""),
	},
}));

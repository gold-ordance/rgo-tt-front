import path from "path";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";

import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react(), dynamicImport()],
	server: {
		host: true,
		port: 5173,
		watch: {
			usePolling: true
		},
		strictPort: true
	},
	resolve: {
		alias: {
			"@shared": path.resolve(__dirname, "./src/shared"),
			"@widgets": path.resolve(__dirname, "./src/widgets"),
			"@app": path.resolve(__dirname, "./src/app"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@entities": path.resolve(__dirname, "./src/entities"),
			"@pages": path.resolve(__dirname, "./src/pages"),
		}
	}
});

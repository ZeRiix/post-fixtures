import { engineConfig, createOxlintOverride, oxlint } from "@duplojs/code-config/oxlint";

export default oxlint.defineConfig({
	extends: [engineConfig],
	overrides: [
		createOxlintOverride({
			excludeFiles: ["**/*.d.ts"],
			files: ["./commitlint.config.ts", "./oxlint.config.ts"],
			ruleset: { open: true },
		}),
	],
	ignorePatterns: [
		"**/*",
		"!/commitlint.config.ts",
		"!/oxlint.config.ts",
	],
});

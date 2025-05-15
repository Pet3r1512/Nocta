import { defineConfig, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text"],
      exclude: [
        "storybook-static/*",
        "app/**/*.stories.tsx",
        "app/**/*.{config,test}.{ts, js}",
        "app/**/*.ts",
        "app/components/ui/*",
        "app/routeTree.gen.ts",
        "__vitest_test__/**/*",
        "*.config.js",
        "*.config.ts",
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});

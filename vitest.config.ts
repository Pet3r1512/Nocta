import path from "path";
import { defineConfig, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
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
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'), // adjust to your actual `src` folder path
    },
  },
});

import type { TestRunnerConfig } from '@storybook/test-runner';
import { expect } from "vitest"

const config: TestRunnerConfig = {
    async postVisit(page, context) {
        // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
        const elementHandler = await page.$('#storybook-root');
        if (elementHandler) {
            const innerHTML = await elementHandler.innerHTML();
            expect(innerHTML).toMatchSnapshot();
        } else {
            throw new Error("Element '#storybook-root' not found");
        }
    },
};

export default config;
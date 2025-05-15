// vitest.setup.ts
import { vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("@tanstack/react-router", () => ({
    useRouter: () => ({
        latestLocation: {
            pathname: "/analytics",
        },
    }),
}));

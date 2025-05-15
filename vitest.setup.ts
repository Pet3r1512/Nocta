// vitest.setup.ts
import { vi } from "vitest";

vi.mock("@tanstack/react-router", () => ({
    useRouter: () => ({
        latestLocation: {
            pathname: "/analytics",
        },
    }),
}));

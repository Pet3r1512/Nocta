import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTheme } from "./useTheme";

describe("useTheme test", () => {
    const mockClassList = {
        add: vi.fn(),
        remove: vi.fn(),
        toggle: vi.fn()
    }

    beforeEach(() => {
        // reset all mocks
        vi.clearAllMocks()
        // mock local storage
        const localStorageMock = (() => {
            let store: Record<string, string> = {}
            return {
                getItem: (key: string) => store[key] || null,
                setItem: (key: string, value: string) => {
                    store[key] = value
                },
                clear: () => {
                    store = {}
                }
            }
        })()
        vi.stubGlobal("localStorage", localStorageMock)

        Object.defineProperty(document, "documentElement", {
            value: { classList: mockClassList },
            configurable: true
        })
    })

    it("should initialize with saved theme from local storage", () => {
        localStorage.setItem("theme", "dark")

        const { result } = renderHook(() => useTheme())

        expect(result.current.theme).toBe("dark")
        expect(mockClassList.add).toHaveBeenCalledWith("dark")
    })

    it("should display default light theme if local storage has no saved theme", () => {
        const { result } = renderHook(() => useTheme())

        expect(result.current.theme).toBe("light")
        expect(mockClassList.remove).toHaveBeenCalledWith("dark")
    })
})
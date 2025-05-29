import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useTimeSelector } from "./useTimeSelector";

describe("useTimeSelector hook tests", () => {
    it("should initialize correctly with given time and calls onChange function", () => {
        const onChange = vi.fn();
        renderHook(() => useTimeSelector("14:30", onChange));
        expect(onChange).toHaveBeenCalledWith("14:30");
    })

    it("should increase hour by 1 correctly", () => {
        const onChange = vi.fn()
        const { result } = renderHook(() => useTimeSelector("07:00", onChange))

        act(() => {
            result.current.incrementHours()
        })

        expect(result.current.hours).toBe(8)
        expect(onChange).toHaveBeenCalledWith("08:00")
    })

    it("should decrease hour by 1 correctly", () => {
        const onChange = vi.fn()
        const { result } = renderHook(() => useTimeSelector("07:00", onChange))

        act(() => {
            result.current.decrementHours()
        })

        expect(result.current.hours).toBe(6)
        expect(onChange).toHaveBeenCalledWith("06:00")
    })

    it("should increase minute by 5 correctly", () => {
        const onChange = vi.fn()
        const { result } = renderHook(() => useTimeSelector("07:00", onChange))

        act(() => {
            result.current.incrementMinutes()
        })

        expect(result.current.minutes).toBe(5)
        expect(onChange).toHaveBeenCalledWith("07:05")
    })

    it("should decrease minute by 5 correctlt", () => {
        const onChange = vi.fn()
        const { result } = renderHook(() => useTimeSelector("07:00", onChange))

        act(() => {
            result.current.decrementMinutes()
        })

        expect(result.current.minutes).toBe(55)
        expect(onChange).toHaveBeenCalledWith("07:55")
    })

    it("toggles AM/PM correctly", () => {
        const onChange = vi.fn();
        const { result } = renderHook(() => useTimeSelector("10:00", onChange));

        expect(result.current.isPM).toBe(false);

        act(() => {
            result.current.toggleAMPM();
        });

        expect(result.current.isPM).toBe(true);
        expect(onChange).toHaveBeenLastCalledWith("22:00");
    });
})
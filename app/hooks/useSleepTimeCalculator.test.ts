import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useSleepTimeCalculator } from "./useSleepTimeCalculator";
import { SleepOption } from "~/components/Layout/Hero/Sleep/SleepOption";

describe("useSleepTimeCalculator test", () => {
    it("should return 3 correct sleep times for 06:00 AM wakeup", () => {
        const { result } = renderHook(() => useSleepTimeCalculator())
        const sleepOptions: SleepOption[] = [
            {
                time: "08:45 pm",
                cycles: 6,
                type: "Ideal"
            },
            {
                time: "10:15 pm",
                cycles: 5,
                type: "Good"
            },
            {
                time: "11:45 pm",
                cycles: 4,
                type: "Okay"
            },
        ]

        expect(result.current.sleepTimeCalculator("06:00")).toStrictEqual(sleepOptions)
    });
    it("should return 3 correct sleep times for 07:30 AM wakeup", () => {
        const { result } = renderHook(() => useSleepTimeCalculator())
        const sleepOptions: SleepOption[] = [
            {
                time: "10:15 pm",
                cycles: 6,
                type: "Ideal"
            },
            {
                time: "11:45 pm",
                cycles: 5,
                type: "Good"
            },
            {
                time: "01:15 am",
                cycles: 4,
                type: "Okay"
            },
        ]

        expect(result.current.sleepTimeCalculator("07:30")).toEqual(sleepOptions)
    });
});
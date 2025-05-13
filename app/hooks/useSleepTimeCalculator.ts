import { SleepOption } from "~/components/Layout/Hero/Sleep/SleepOption";

export const useSleepTimeCalculator = () => {
    const SLEEP_CYCLE_MINUTES = 90;
    const FALL_ASLEEP_MINUTES = 15;
    const CYCLES: [6, 5, 4] = [6, 5, 4]

    const sleepTimeCalculator = (wakeUpTime: string): SleepOption[] => {
        const [hours, minutes] = wakeUpTime.split(":").map(Number);
        const wake = new Date();
        wake.setHours(hours, minutes, 0, 0);

        return CYCLES.map((cycle) => {
            const totalSleepMinutes = cycle * SLEEP_CYCLE_MINUTES + FALL_ASLEEP_MINUTES;
            const sleepTime = new Date(wake.getTime() - totalSleepMinutes * 60000);

            const timeString = sleepTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });

            const type: SleepOption["type"] =
                cycle === 6 ? "Ideal" : cycle === 5 ? "Good" : "Okay";

            return {
                time: timeString,
                cycles: cycle,
                type,
            };
        });
    }

    return { sleepTimeCalculator }
}
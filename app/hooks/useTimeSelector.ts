import { useEffect, useState } from "react";

export function useTimeSelector(initialTime: string, onChange: (value: string) => void) {
    const [hours, setHours] = useState(parseInt(initialTime.split(":")[0]));
    const [minutes, setMinutes] = useState(parseInt(initialTime.split(":")[1]));
    const [isPM, setIsPM] = useState(hours >= 12);

    useEffect(() => {
        const newHours = (isPM ? (hours % 12) + 12 : hours % 12 || 12) % 24;
        onChange(
            `${newHours.toString().padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}`
        );
    }, [hours, minutes, isPM, onChange]);

    const incrementHours = () => {
        setHours((prev) => (prev % 12) + 1);
    };
    const decrementHours = () => {
        setHours((prev) => ((prev - 2 + 12) % 12) + 1);
    };
    const incrementMinutes = () => {
        setMinutes((prev) => (prev + 5) % 60);
    };
    const decrementMinutes = () => {
        setMinutes((prev) => (prev - 5 + 60) % 60);
    };
    const toggleAMPM = () => {
        setIsPM((prev) => !prev);
    };

    return {
        hours,
        minutes,
        isPM,
        incrementHours,
        decrementHours,
        incrementMinutes,
        decrementMinutes,
        toggleAMPM,
    }
}
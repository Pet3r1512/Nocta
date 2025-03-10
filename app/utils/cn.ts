import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function UppercaseFirstLetter(value: string) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1)
}
import { EMPTY } from "@/constants/app.constants";

export const removeWhiteSpacesAndLowerCase = (text: string) =>
    text.toLowerCase().trim().replace(/ /g, EMPTY);

export const lowerCaseAndSplitWords = (text: string) =>
    removeWhiteSpacesAndLowerCase(text).split("/");

export const onlyLettersAvailable = (text: string) =>
    text.replace(/[^a-zA-Z\s]/g, EMPTY);

export const getPorcentage = (number: number, max: number) => {
    return `${((100 / max) * number).toFixed(2)} %`;
};

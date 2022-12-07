import styles from "./InputGame.module.css";
import React from "react";
import { ENTER, TEXT, EMPTY } from "@/constants/app.constants";
import {
    removeWhiteSpacesAndLowerCase,
    onlyLettersAvailable,
    lowerCaseAndSplitWords,
} from "@/helpers";
import type { InputGameType, onChangeType } from "@/types";

const InputGame = ({ editable, onEnter, verb, verbType }: InputGameType) => {
    const [term, setTerm] = React.useState(EMPTY);
    const value = verb[verbType];

    const onKeyUp = (event: React.KeyboardEvent) => {
        const target = event.target as HTMLInputElement;
        const query = removeWhiteSpacesAndLowerCase(target.value);
        let success = false;

        const possibleVerbs = lowerCaseAndSplitWords(value);

        if (event.key === ENTER) {
            if (possibleVerbs.some((match) => match === query)) {
                success = true;
            }
            if (query !== EMPTY) {
                onEnter?.(success, query, verbType);
            }
        }
    };

    const onChange = (event: onChangeType) => {
        const target = event.target;
        const string = onlyLettersAvailable(target.value);
        if (string.length <= 10) setTerm(string);
    };

    const conditionalProps = {
        autoFocus: editable,
        disabled: !editable,
        tabIndex: editable ? 1 : -1,
        placeholder: editable ? EMPTY : value,
        className: `${styles.input} ${
            !editable ? styles.not_editable : EMPTY
        } `,
    };
    return (
        <input
            {...conditionalProps}
            value={term}
            type={TEXT}
            onKeyUp={onKeyUp}
            onChange={onChange}
        />
    );
};

export default InputGame;

import styles from "./InputText.module.css";
import React from "react";
import type { InputTextProps, onChangeType } from "@/types";
import { ONLY_TEXT_REGEXP, TEXT, EMPTY } from "@/constants/app.constants";
import { onlyLettersAvailable } from "@/helpers";

const InputText = (props: InputTextProps) => {
    const [term, setTerm] = React.useState(EMPTY);

    const customHanlderClick = (event: onChangeType) => {
        const string = onlyLettersAvailable(event.target.value);

        if (event.target.value === EMPTY) {
            if (string.length <= 10) {
                setTerm(EMPTY);
                props.onChange?.(event);
            }
        }
        if (ONLY_TEXT_REGEXP.test(event.target.value)) {
            if (string.length <= 10) {
                setTerm(event.target.value);
                props.onChange?.(event);
            }
        }
    };
    return (
        <div className={styles.input_wrapper}>
            <input
                type={TEXT}
                className={styles.input}
                value={props.value ?? term}
                onChange={customHanlderClick}
                placeholder={props.placeHolder}
            />
        </div>
    );
};

export default InputText;

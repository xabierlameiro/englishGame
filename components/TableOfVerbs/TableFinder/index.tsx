"use client";
import styles from "./tableFinder.module.css";
import React from "react";
import InputText from "@/components/InputText";
import type { TableFinderPropsType } from "@/types";
import useVerbFinder from "@/hooks/useVerbFinder";
import useWindowResize from "@/hooks/useWidowResize";
import { VERBS } from "@/constants/app.constants";

const TableFinder = ({ children }: TableFinderPropsType) => {
    const { fundVerbs, onChange } = useVerbFinder();
    const { isMobile } = useWindowResize();

    const inputs = () =>
        Object.values(VERBS).map((type) => {
            return (
                <InputText
                    key={type}
                    placeHolder={isMobile ? type : ""}
                    onChange={onChange(type)}
                />
            );
        });

    return (
        <>
            <div className={styles.table_finder}>
                <div className={styles.clear} />
                {inputs()}
            </div>
            {children && React.cloneElement(children, { fundVerbs: fundVerbs })}
        </>
    );
};

export default TableFinder;

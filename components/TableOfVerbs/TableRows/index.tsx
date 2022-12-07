"use client";
import styles from "./TableRows.module.css";
import React from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import type { ObjectVerbType } from "@/types";

const TableRows = ({ fundVerbs }: { fundVerbs?: ObjectVerbType[] }) => {
    const { scrollRef } = useScrollPosition({ fundVerbs });

    if (!fundVerbs) {
        return null;
    }

    const Rows = fundVerbs.map((verb) => {
        return (
            <div key={verb.number} className={styles.row}>
                <div className={styles.row_number}>{verb.number}</div>
                <div>{verb.infinitive}</div>
                <div>{verb.pastSimple}</div>
                <div>{verb.pastParticiple}</div>
                <div>{verb.translation}</div>
            </div>
        );
    });

    if (!Rows.length) {
        return (
            <div className={styles.empty}>
                Sorry, don&apos;t found results &#x1F62D;
            </div>
        );
    }

    return (
        <div className={styles.verbs} ref={scrollRef}>
            {Rows}
        </div>
    );
};
export default TableRows;

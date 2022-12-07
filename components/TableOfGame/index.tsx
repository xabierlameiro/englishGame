"use client";
import styles from "./TableOfGame.module.css";
import React from "react";
import TableHeader from "@/components/TableOfGame/TableHeader";
import TableCounter from "@/components/TableOfGame/TableCounter";
import TableInput from "@/components/TableOfGame/TableInput";
import TableResults from "@/components/TableOfGame/TableResults";
import { verbs as IrregularVerbs } from "@/sources/irregularVerbs";
import { LOAD } from "@/constants/app.constants";
import type { ObjectVerbType, ScoreType } from "@/types";

const RandomNumber = (max: number) => Math.floor(Math.random() * max);

const TableOfGame = () => {
    const [verbs, setVerbs] = React.useState<ObjectVerbType[]>(IrregularVerbs);
    const [randomVerb, setRandomVerb] = React.useState<typeof LOAD | number>(
        LOAD
    );
    const [resultList, setResultList] = React.useState<ObjectVerbType[]>([]);
    const [score, setScore] = React.useState<ScoreType>({
        hits: 0,
        fails: 0,
    });

    React.useEffect(() => {
        setRandomVerb(RandomNumber(verbs.length));
    }, [verbs.length]);

    return (
        <>
            <TableCounter score={score} max={154} />
            <div className={styles.table}>
                <TableHeader />
                <TableInput
                    verbs={verbs}
                    randomVerb={randomVerb}
                    setScore={setScore}
                    setVerbs={setVerbs}
                    setResultList={setResultList}
                    score={score}
                />
                <TableResults resultList={resultList} />
            </div>
        </>
    );
};

export default TableOfGame;

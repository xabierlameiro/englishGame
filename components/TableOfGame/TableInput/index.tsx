import styles from "./TableInput.module.css";
import InputGame from "@/components/InputGame";
import type { TableInputType, ObjectVerbType, ScoreType } from "@/types";
import { LOAD, VERBS } from "@/constants/app.constants";

const TableInput = ({
    verbs,
    score,
    randomVerb,
    setScore,
    setVerbs,
    setResultList,
}: TableInputType) => {
    const onEnter = (success: boolean, query: string, verbType: string) => {
        try {
            const items = verbs;
            if (randomVerb !== LOAD) {
                const [discardVerb] = items.splice(randomVerb, 1);
                setResultList((currentList: ObjectVerbType[]) => [
                    ...currentList,
                    { ...discardVerb, success, query, verbType },
                ]);
                setScore((val: ScoreType) => {
                    return {
                        hits: success ? val.hits + 1 : score.hits,
                        fails: !success ? val.fails + 1 : score.fails,
                    };
                });
                setVerbs(items);
            }
        } catch (e) {
            console.log("Error - ", e);
        }
    };

    const rows = verbs.map((verb) => {
        const number = Math.floor(Math.random() * 3);
        return (
            <div
                key={verb.number}
                className={`${styles.row} ${styles.row_input}`}
            >
                <div className={styles.clear} />
                <InputGame
                    verb={verb}
                    verbType={VERBS.INFINITIVE}
                    editable={number === 0}
                    onEnter={onEnter}
                />
                <InputGame
                    verb={verb}
                    verbType={VERBS.PAST_SIMPLE}
                    editable={number === 1}
                    onEnter={onEnter}
                />
                <InputGame
                    verb={verb}
                    verbType={VERBS.PAST_PARTICIPLE}
                    editable={number === 2}
                    onEnter={onEnter}
                />
                <div className={styles.translation}>{verb.translation}</div>
            </div>
        );
    });

    return randomVerb === LOAD || verbs.length === 0 ? (
        <div />
    ) : (
        rows[randomVerb]
    );
};

export default TableInput;

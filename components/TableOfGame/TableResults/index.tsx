import styles from "./TableResults.module.css";
import useScrollPosition from "@/hooks/useScrollPosition";
import { VERBS, EMPTY } from "@/constants/app.constants";
import { ObjectVerbType } from "@/types";

const TableResults = ({ resultList }: { resultList: ObjectVerbType[] }) => {
    const { scrollRef } = useScrollPosition({ fundVerbs: resultList });

    const checkAnswer = (item: ObjectVerbType) =>
        Object.values(VERBS).map((type, index) => {
            if (index > 2) return;
            return (
                <>
                    <div className={styles.normal} key={index}>
                        <div
                            className={`${styles.normal} ${
                                item.verbType === type && !item.success
                                    ? styles.wrong
                                    : item.verbType === type && item.success
                                    ? styles.success
                                    : EMPTY
                            }`}
                        >
                            {item.verbType === type
                                ? item.query
                                : item.infinitive}
                        </div>
                        <div className={styles.solution}>
                            {item.verbType === type && !item.success
                                ? `(${item.infinitive})`
                                : EMPTY}
                        </div>
                    </div>
                </>
            );
        });

    const ResultRows = resultList
        .map((item, a) => {
            return (
                <div key={a} className={styles.row}>
                    <div />
                    {checkAnswer(item)}
                    <div>{item.translation}</div>
                </div>
            );
        })
        .reverse();

    return (
        <div className={styles.verbs} ref={scrollRef}>
            {ResultRows}
        </div>
    );
};

export default TableResults;

import styles from "./TableCounter.module.css";
import type { TableCounterProps } from "@/types";
import { getPorcentage } from "@/helpers";

const TableCounter = ({ score, max }: TableCounterProps) => {
    return (
        <div className={styles.counter}>
            <div>
                Hits : <span className={styles.hits}>{score.hits}</span>
                <span>{getPorcentage(score.hits, max)}</span>
            </div>
            <div>
                Fails : <span className={styles.fails}>{score.fails}</span>
                <span>{getPorcentage(score.fails, max)}</span>
            </div>
        </div>
    );
};

export default TableCounter;

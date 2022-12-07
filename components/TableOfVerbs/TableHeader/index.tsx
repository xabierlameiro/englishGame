import styles from "./TableHeader.module.css";
import { VERBS } from "@/constants/app.constants";

const TableHeader = () => {
    const titles = () =>
        Object.values(VERBS).map((type) => {
            return <div key={type}>{type}</div>;
        });
    return (
        <div className={styles.table_header}>
            <div />
            {titles()}
        </div>
    );
};
export default TableHeader;

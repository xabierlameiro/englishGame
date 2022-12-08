import styles from "./TableHeader.module.css";

const TableHeader = () => {
    return (
        <div className={styles.table_header}>
            <div className={styles.clear} />
            <div>Infinitive</div>
            <div>P.Simple</div>
            <div>P.Participle</div>
            <div>Translation</div>
        </div>
    );
};
export default TableHeader;

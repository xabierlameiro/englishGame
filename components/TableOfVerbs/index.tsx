import styles from "./TableOfVerbs.module.css";
import React from "react";
import TableRows from "@/components/TableOfVerbs/TableRows";
import TableFinder from "@/components/TableOfVerbs/TableFinder";
import TableHeader from "@/components/TableOfVerbs/TableHeader";

const TableOfVerbs = () => {
    return (
        <div className={styles.table}>
            <TableHeader />
            <TableFinder>
                <TableRows />
            </TableFinder>
        </div>
    );
};
export default TableOfVerbs;

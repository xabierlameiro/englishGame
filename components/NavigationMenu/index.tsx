"use client";
import React from "react";
import styles from "./NavigationMenu.module.css";
import Link from "next/link";
import { menu } from "@/constants/app.constants";

const NavigationMenu = () => {
    const [open, setOpenMenu] = React.useState<boolean>(false);
    const onClickHandler = () => setOpenMenu((val) => !val);
    const onBlurClose = () => setOpenMenu(false);

    return (
        <section className={styles.top_nav}>
            <Link href="/">Welcome to learn!</Link>
            <input
                type="checkbox"
                id="menu-toggle"
                className={styles.menu_toggle}
                checked={open}
            />
            <label
                tabIndex={1}
                htmlFor="menu-toggle"
                className={styles.menu_button_container}
                onClick={onClickHandler}
                onBlur={onBlurClose}
            >
                <div className={styles.menu_button} />
            </label>
            <ul className={styles.menu}>
                {menu.map((li) => (
                    <li key={li.title}>
                        <Link href={li.route}>{li.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default NavigationMenu;

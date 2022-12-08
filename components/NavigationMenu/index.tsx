import styles from "./NavigationMenu.module.css";
import Link from "next/link";
import { menu } from "@/constants/app.constants";

const NavigationMenu = () => {
    return (
        <section className={styles.top_nav}>
            <div>Welcome to learn!</div>
            <input
                className={styles.menu_toggle}
                id="menu-toggle"
                type="checkbox"
            />
            <label
                className={styles.menu_button_container}
                htmlFor="menu-toggle"
            >
                <div className={styles.menu_button}></div>
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

import styles from "./NavigationMenu.module.css";
import Link from "next/link";
import { menu } from "@/constants/app.constants";

const NavigationMenu = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav_list}>
                {menu.map((li) => (
                    <li key={li.title}>
                        <Link href={li.route}>{li.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationMenu;

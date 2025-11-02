import { BellRing, Settings } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.greeting}>Good Afternoon</p>
        <h1 className={styles.name}>Ava Martinez</h1>
      </div>
      <div className={styles.actions}>
        <button className={styles.iconButton} aria-label="Notifications">
          <BellRing size={22} />
          <span className={styles.badge} aria-hidden>3</span>
        </button>
        <button className={styles.iconButton} aria-label="Settings">
          <Settings size={22} />
        </button>
      </div>
    </header>
  );
}

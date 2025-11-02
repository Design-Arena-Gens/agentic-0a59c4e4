import clsx from "clsx";
import { CircleDollarSign, Grip, Home, LineChart, User } from "lucide-react";
import styles from "./BottomNav.module.css";

const items = [
  { id: "home", label: "Home", icon: <Home size={20} />, active: true },
  { id: "budget", label: "Budget", icon: <LineChart size={20} />, active: false },
  { id: "pay", label: "Pay", icon: <CircleDollarSign size={22} />, primary: true },
  { id: "cards", label: "Cards", icon: <Grip size={20} />, active: false },
  { id: "profile", label: "Profile", icon: <User size={20} />, active: false }
];

export default function BottomNav() {
  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <button
          key={item.id}
          className={clsx(item.primary ? styles.primaryAction : styles.action, {
            [styles.active]: item.active && !item.primary
          })}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

import { ArrowDownToLine, ArrowUpRight, Landmark, Send } from "lucide-react";
import styles from "./QuickActions.module.css";

type Action = {
  id: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
};

const actions: Action[] = [
  {
    id: "deposit",
    label: "Deposit",
    icon: <ArrowDownToLine size={20} />,
    accent: "var(--color-success)"
  },
  {
    id: "transfer",
    label: "Transfer",
    icon: <Send size={20} />,
    accent: "#a855f7"
  },
  {
    id: "pay-bill",
    label: "Pay bill",
    icon: <ArrowUpRight size={20} />,
    accent: "var(--color-warning)"
  },
  {
    id: "wire",
    label: "Wire",
    icon: <Landmark size={20} />,
    accent: "#38bdf8"
  }
];

export default function QuickActions() {
  return (
    <section>
      <h2 className={styles.title}>Quick actions</h2>
      <div className={styles.grid}>
        {actions.map((action) => (
          <button key={action.id} className={styles.action}>
            <span className={styles.icon} style={{ backgroundColor: `${action.accent}30`, color: action.accent }}>
              {action.icon}
            </span>
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

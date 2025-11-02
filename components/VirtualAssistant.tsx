import { MessageCircle, Sparkles } from "lucide-react";
import styles from "./VirtualAssistant.module.css";

export default function VirtualAssistant() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.icon}>
          <Sparkles size={18} />
        </span>
        <div>
          <h2>Nova, your money copilot</h2>
          <p>Ask Nova to schedule transfers, dispute transactions, or predict your cash flow.</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button>&ldquo;How much can I save this month?&rdquo;</button>
        <button>&ldquo;Freeze my travel card&rdquo;</button>
        <button>&ldquo;Schedule rent for June 1&rdquo;</button>
      </div>
      <button className={styles.cta}>
        <MessageCircle size={18} />
        Start chat
      </button>
    </section>
  );
}

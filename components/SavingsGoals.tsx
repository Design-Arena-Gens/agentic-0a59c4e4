import { mockSavings } from "@/lib/data";
import styles from "./SavingsGoals.module.css";

export default function SavingsGoals() {
  return (
    <section>
      <h2 className={styles.title}>Savings goals</h2>
      <div className={styles.grid}>
        {mockSavings.map((goal) => {
          const progress = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
          return (
            <article key={goal.id} className={styles.card}>
              <header>
                <h3>{goal.title}</h3>
                <span className={styles.deadline}>Due {new Date(goal.deadline).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric"
                })}</span>
              </header>
              <p className={styles.amounts}>
                ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
              </p>
              <div className={styles.track}>
                <div className={styles.trackFill} style={{ width: `${progress}%` }} />
              </div>
              <p className={styles.progress}>{progress}% funded</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

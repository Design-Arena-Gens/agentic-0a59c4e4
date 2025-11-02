import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { mockInsights } from "@/lib/data";
import styles from "./Insights.module.css";

const icons = {
  positive: <CheckCircle2 size={18} />,
  warning: <AlertTriangle size={18} />,
  info: <Info size={18} />
} as const;

export default function Insights() {
  return (
    <section>
      <h2 className={styles.title}>Insights</h2>
      <div className={styles.list}>
        {mockInsights.map((insight) => (
          <article key={insight.id} className={styles.item} data-sentiment={insight.sentiment}>
            <span className={styles.icon}>{icons[insight.sentiment]}</span>
            <div>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

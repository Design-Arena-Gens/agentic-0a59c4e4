import { CreditCard } from "lucide-react";
import { mockCards } from "@/lib/data";
import styles from "./CardCarousel.module.css";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default function CardCarousel() {
  return (
    <section>
      <h2 className={styles.title}>Your cards</h2>
      <div className={styles.scroller}>
        {mockCards.map((card) => {
          const utilization = Math.round((card.balance / card.limit) * 100);
          return (
            <article
              key={card.id}
              className={styles.card}
              style={{
                background: `linear-gradient(135deg, ${card.gradient[0]}, ${card.gradient[1]})`
              }}
            >
              <header className={styles.header}>
                <span className={styles.brand}>{card.brand}</span>
                <CreditCard size={22} />
              </header>
              <div>
                <p className={styles.balanceLabel}>Current balance</p>
                <p className={styles.balance}>{currency.format(card.balance)}</p>
                <p className={styles.meta}>Card ending {card.last4}</p>
              </div>
              <footer className={styles.footer}>
                <div className={styles.track}>
                  <div className={styles.trackFill} style={{ width: `${utilization}%` }} />
                </div>
                <span className={styles.utilization}>{utilization}% of ${currency.format(card.limit).replace("$", "")}</span>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}

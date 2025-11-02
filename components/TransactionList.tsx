import { Fragment } from "react";
import { mockTransactions } from "@/lib/data";
import styles from "./TransactionList.module.css";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function formatDate(value: string) {
  const date = new Date(value);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(date);
}

export default function TransactionList() {
  return (
    <section>
      <header className={styles.header}>
        <h2 className={styles.title}>Latest activity</h2>
        <button className={styles.linkButton}>See all</button>
      </header>
      <div className={styles.list}>
        {mockTransactions.map((transaction) => (
          <Fragment key={transaction.id}>
            <article className={styles.item}>
              <div>
                <p className={styles.merchant}>{transaction.merchant}</p>
                <p className={styles.meta}>
                  {transaction.category} · {formatDate(transaction.datetime)}
                </p>
              </div>
              <div className={styles.amountWrap}>
                <span className={transaction.amount >= 0 ? styles.positive : styles.negative}>
                  {currency.format(transaction.amount)}
                </span>
                <span className={styles.status} data-status={transaction.status}>
                  {transaction.status}
                </span>
              </div>
            </article>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

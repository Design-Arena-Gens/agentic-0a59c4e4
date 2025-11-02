import { mockAccounts } from "@/lib/data";
import styles from "./AccountSummary.module.css";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default function AccountSummary() {
  const primary = mockAccounts[0];
  const secondary = mockAccounts[1];

  return (
    <section className={styles.wrapper}>
      <div className={styles.primaryCard}>
        <div className={styles.label}>Total balance</div>
        <div className={styles.amount}>{currency.format(primary.balance + secondary.balance)}</div>
        <div className={styles.accounts}>
          <span>{primary.name}</span>
          <span>{primary.accountNumber}</span>
        </div>
      </div>
      <div className={styles.splitRow}>
        {[primary, secondary].map((account) => (
          <div key={account.id} className={styles.subCard}>
            <p className={styles.subTitle}>{account.name}</p>
            <p className={styles.subAmount}>{currency.format(account.balance)}</p>
            <p className={styles.subMeta}>{account.accountNumber}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import AccountSummary from "@/components/AccountSummary";
import BottomNav from "@/components/BottomNav";
import CardCarousel from "@/components/CardCarousel";
import Header from "@/components/Header";
import Insights from "@/components/Insights";
import QuickActions from "@/components/QuickActions";
import SavingsGoals from "@/components/SavingsGoals";
import SpendingChart from "@/components/SpendingChart";
import TransactionList from "@/components/TransactionList";
import VirtualAssistant from "@/components/VirtualAssistant";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.shell}>
      <div className={styles.surface}>
        <Header />
        <AccountSummary />
        <QuickActions />
        <CardCarousel />
        <div className={styles.grid}>
          <SpendingChart />
          <VirtualAssistant />
        </div>
        <div className={styles.grid}>
          <TransactionList />
          <div className={styles.sidebar}>
            <SavingsGoals />
            <Insights />
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}

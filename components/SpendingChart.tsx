"use client";

import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler
} from "chart.js";
import styles from "./SpendingChart.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Filler);

const categories = [
  { label: "Food", amount: 420 },
  { label: "Travel", amount: 780 },
  { label: "Shopping", amount: 350 },
  { label: "Bills", amount: 260 },
  { label: "Wellness", amount: 190 }
];

export default function SpendingChart() {
  const data = useMemo(
    () => ({
      labels: categories.map((c) => c.label),
      datasets: [
        {
          label: "Spending",
          data: categories.map((c) => c.amount),
          borderRadius: 12,
          borderSkipped: false,
          backgroundColor: categories.map((_, index) =>
            index === 1 ? "#fbbf24" : "rgba(53, 99, 233, 0.8)"
          ),
          hoverBackgroundColor: categories.map((_, index) =>
            index === 1 ? "#f59e0b" : "rgba(12, 186, 186, 0.9)"
          )
        }
      ]
    }),
    []
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: "rgba(148, 163, 184, 0.8)",
            font: {
              size: 11,
              family: "Inter"
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(148, 163, 184, 0.1)"
          },
          ticks: {
            color: "rgba(148, 163, 184, 0.8)",
            font: {
              size: 11,
              family: "Inter"
            },
            callback(value: string | number) {
              if (typeof value === "string") return `$${value}`;
              return `$${value}`;
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          borderColor: "rgba(148, 163, 184, 0.2)",
          borderWidth: 1,
          callbacks: {
            label(context: any) {
              return `$${context.parsed.y}`;
            }
          }
        }
      }
    }),
    []
  );

  return (
    <section>
      <header className={styles.header}>
        <h2 className={styles.title}>Spending pulse</h2>
        <span className={styles.period}>May 2024</span>
      </header>
      <div className={styles.chartWrap}>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}

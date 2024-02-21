import styles from "@/styles/page.module.css";
import DateSection from "@/components/page-sections/date-section/DateSection";
export default function Home() {
  return (
    <main className={styles.main}>
      <DateSection />
    </main>
  );
}

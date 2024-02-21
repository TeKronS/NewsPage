import styles from "./date.module.css";

export default function DateSection() {
  return (
    <section className={styles.date}>
      <span>12/12/12</span>
      <span>Actualizado hace 1 hora</span>
    </section>
  );
}

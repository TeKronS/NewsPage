import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topContainer}>
        <div className={styles.relleno}></div>
        <div className={styles.addmeContainer}>
          <div>
            <span>Síguenos</span>
          </div>
          <div className={styles.socialContainer}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.relleno}></div>
      </div>
      <div className={styles.linkContainer}>
        <span>Contáctanos</span>
        <span>Sobre Nosotros</span>
      </div>
    </footer>
  );
}

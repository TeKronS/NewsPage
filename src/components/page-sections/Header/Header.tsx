import styles from "./header.module.css";
import Burger from "@/img/Burger";
import Search from "@/img/Search";
import Image from "next/image";
import icon from "@/img/favicon.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.burger}>
        <Burger />
      </div>
      <h1 className={styles.title}>
        {/* <span>ENTRE</span>
        <span>NOTICIAS</span> */}
        <Image src={icon} width={480} height={480} alt="" />
      </h1>
      <div className={styles.search}>
        <Search />
      </div>
    </header>
  );
}

import header from "./images/header-image.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <img className={styles.headerImage} src={header} />
      <img className={styles.headerImage} src={header} />
      <img className={styles.headerImage} src={header} />
    </div>
  );
}

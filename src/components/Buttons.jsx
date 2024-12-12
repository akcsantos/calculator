import styles from "./buttons.module.css";

export default function Buttons({ value, handleClick }) {
  return (
    <button className={styles.buttons} value={value} onClick={handleClick}>
      {value}
    </button>
  );
}

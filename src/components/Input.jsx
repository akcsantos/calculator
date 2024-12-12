import styles from "./input.module.css";

export default function Input({ display, operation }) {
  return (
    <div className={styles.displays}>
      <div className={styles.operation}>{operation}</div>
      <div className={styles.input}>{display}</div>
    </div>
  );
}

import Buttons from "./Buttons";
import styles from "./buttonRows.module.css";

export default function ButtonRows({
  value,
  inputValue,
  clearScreen,
  deletePrevious,
  operatorClick,
  equalButton,
  negateButton,
  decimalButton,
  percentButton,
}) {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.rows}>
        <Buttons
          value={"AC"}
          handleClick={clearScreen}
          className={styles.buttons}
        />
        <Buttons
          value={"DELETE"}
          handleClick={deletePrevious}
          className={styles.coloredButton}
        />
        <Buttons value={"%"} handleClick={percentButton} />
        <Buttons value={"÷"} handleClick={operatorClick} />
      </div>

      <div className={styles.rows}>
        <Buttons value={7} handleClick={inputValue} />
        <Buttons value={8} handleClick={inputValue} />
        <Buttons value={9} handleClick={inputValue} />
        <Buttons
          value={"*"}
          handleClick={operatorClick}
          className={styles.coloredButton}
        />
      </div>

      <div className={styles.rows}>
        <Buttons value={4} handleClick={inputValue} />
        <Buttons value={5} handleClick={inputValue} />
        <Buttons value={6} handleClick={inputValue} />
        <Buttons
          value={"-"}
          handleClick={operatorClick}
          className={styles.coloredButton}
        />
      </div>

      <div className={styles.rows}>
        <Buttons value={1} handleClick={inputValue} />
        <Buttons value={2} handleClick={inputValue} />
        <Buttons value={3} handleClick={inputValue} />
        <Buttons
          value={"+"}
          handleClick={operatorClick}
          className={styles.coloredButton}
        />
      </div>

      <div className={styles.rows}>
        <Buttons value={"+/-"} handleClick={negateButton} />
        <Buttons value={0} handleClick={inputValue} />
        <Buttons value={"."} handleClick={decimalButton} />
        <Buttons
          value={"= "}
          handleClick={equalButton}
          className={styles.coloredButton}
        />
      </div>
    </div>
  );
}

import ButtonRows from "./ButtonRows";
import Input from "./Input";
import styles from "./centerContainer.module.css";
import { useState } from "react";

export default function CenterContainer() {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [operation, setOperation] = useState("");

  function clearScreen() {
    setDisplay("");
    setOperator("");
    setFirstValue("");
    setOperation("");
  }

  function deletePrevious() {
    setDisplay(display.slice(0, -1));
  }

  function inputValue(e) {
    const targetValue = e.target.value;
    if (display === "Error") {
      setDisplay(targetValue);
    } else {
      setDisplay(display + targetValue);
    }
  }

  function negateButton() {
    if (display.substring(0, 1) === "-") {
      setDisplay(display.substring(1));
    } else {
      setDisplay("-" + display);
    }
  }

  function percentButton() {
    if (display === "") {
      setOperation("0");
      setFirstValue(0);
    } else if (display !== "" && firstValue === "") {
      setDisplay("0");
      setOperation("0");
    } else {
      const percentage = (parseFloat(display) * firstValue) / 100;
      setDisplay(percentage);
      setOperation(firstValue + " " + operator + " " + percentage);
    }
  }

  function decimalButton() {
    if (display.includes(".")) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + ".");
    }
  }

  function operatorClick(e) {
    const targetOperator = e.target.value;

    if (display === "" && firstValue === "") {
      setDisplay("Error");
    } else if (firstValue === "") {
      setFirstValue(parseFloat(display));
      setDisplay("");
      setOperator(targetOperator);
      setOperation(display + " " + targetOperator);
    } else if (firstValue !== "" && display === "") {
      setOperator(targetOperator);
      setOperation(firstValue + " " + targetOperator);
    } else {
      const secondValue = parseFloat(display);
      const total = operate(firstValue, secondValue, operator);
      setFirstValue(total);
      setDisplay("");
      setOperator(targetOperator);
      setOperation(total + " " + targetOperator);
    }
  }

  function operate(firstValue, secondValue, operator) {
    switch (operator) {
      case "+":
        return firstValue + secondValue;
        break;
      case "-":
        return firstValue - secondValue;
        break;
      case "*":
        return firstValue * secondValue;
        break;
      case "÷":
        return firstValue / secondValue;
        break;
    }
  }

  function equalButton(e) {
    if (firstValue === "") {
      setOperation(display);
    } else {
      const secondValue = parseFloat(display);
      const total = operate(firstValue, secondValue, operator);
      setFirstValue(total);
      setDisplay("");
      setOperator();
      setOperation(total);
    }
  }

  return (
    <div className={styles.centerContainer}>
      <Input display={display} operation={operation} />
      <ButtonRows
        inputValue={inputValue}
        clearScreen={clearScreen}
        deletePrevious={deletePrevious}
        operatorClick={operatorClick}
        equalButton={equalButton}
        negateButton={negateButton}
        decimalButton={decimalButton}
        percentButton={percentButton}
      />
    </div>
  );
}

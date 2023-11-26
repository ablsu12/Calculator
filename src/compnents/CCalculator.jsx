import styles from "./CCalculator.module.css";
import {CInputBox} from "./CInputBox";
import {CCalculatorBody} from "./CCalculatorBody";
export function CCalculator() {
  return (
    <>
      <div className={styles.calculator}>
        <CInputBox />
        <CCalculatorBody />
      </div>
    </>
  );
}

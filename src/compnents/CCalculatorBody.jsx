import styles from "./CCalculatorBody.module.css";
export function CCalculatorBody({children}) {
  return (
    <>
      <div className={`${styles.calculatorBody} rounded-b-lg`}>{children}</div>
    </>
  );
}

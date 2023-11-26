import styles from "./CCalculatorBody.module.css";
import { CButton } from "./CButton";
export function CCalculatorBody() {
  const numData = [
    { number: "AC" },
    { number: "C" },
    { number: "%" },
    { number: "+" },
    { number: "1" },
    { number: "2" },
    { number: "3" },
    { number: "-" },
    { number: "4" },
    { number: "5" },
    { number: "6" },
    { number: "x" },
    { number: "7" },
    { number: "8" },
    { number: "9" },
    { number: "/" },
    { number: "0" },
    { number: "." },
    { number: "=" },
  ];
  return (
    <>
      <div className={styles.calculatorBody}>
        {numData.map((x) => {
          return <CButton value={x.number} />;
        })}
      </div>
    </>
  );
}

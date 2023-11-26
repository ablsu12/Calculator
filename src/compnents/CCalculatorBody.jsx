import styles from "./CCalculatorBody.module.css";
import { CButton } from "./CButton";
export function CCalculatorBody() {
  const numData = [
    { number: "AC", round: false, lightColor: true },
    { number: "C", round: false, lightColor: true },
    { number: "%", round: false, lightColor: true },
    { number: "+", round: false, lightColor: true },
    { number: "1", round: false, lightColor: false },
    { number: "2", round: false, lightColor: false },
    { number: "3", round: false, lightColor: false },
    { number: "-", round: false, lightColor: true },
    { number: "4", round: false, lightColor: false },
    { number: "5", round: false, lightColor: false },
    { number: "6", round: false, lightColor: false },
    { number: "x", round: false, lightColor: true },
    { number: "7", round: false, lightColor: false },
    { number: "8", round: false, lightColor: false },
    { number: "9", round: false, lightColor: false },
    { number: "/", round: false, lightColor: true },
    { number: "0", round: true, lightColor: false },
    { number: ".", round: false, lightColor: false },
    { number: "=", round: false, lightColor: false, double: true },
  ];
  return (
    <>
      <div className={styles.calculatorBody}>
        {numData.map((x) => {
          return (
            <CButton
              value={x.number}
              round={x.round}
              lightColor={x.lightColor}
              double={x.double}
            />
          );
        })}
      </div>
    </>
  );
}

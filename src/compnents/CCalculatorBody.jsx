import styles from "./CCalculatorBody.module.css";
import { CButton } from "./CButton";
export function CCalculatorBody() {
  return (
    <>
      <div className={styles.calculatorBody}>
        <CButton>AC</CButton>
        <CButton>C</CButton>
        <CButton>%</CButton>
        <CButton>/</CButton>
        <CButton>7</CButton>
        <CButton>8</CButton>
        <CButton>9</CButton>
        <CButton>*</CButton>
        <CButton>4</CButton>
        <CButton>5</CButton>
        <CButton>6</CButton>
        <CButton>-</CButton>
        <CButton>1</CButton>
        <CButton>2</CButton>
        <CButton>3</CButton>
        <CButton>+</CButton>
        <CButton addClass={`rounded-bl-lg`}>0</CButton>
        <CButton>.</CButton>
        <CButton addClass={`col-span-2 rounded-br-lg`}>=</CButton>
      </div>
    </>
  );
}

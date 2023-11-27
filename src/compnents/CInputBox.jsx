import styles from "./CInputBox.module.css";
export function CInputBox({ inputValue, result }) {
  return (
    <>
      <div className={styles.inputParent}>
        <input value={inputValue} type={"text"} className={styles.input} />
        <input value={result} type={"text"} className={styles.input} />
      </div>
    </>
  );
}

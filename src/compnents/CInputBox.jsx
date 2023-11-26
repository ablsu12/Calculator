import styles from './CInputBox.module.css'
export function CInputBox() {
  return <>
    <div className={styles.inputParent}>
      <input type={"number"} className={styles.input}/>
    </div>
  </>;
}

import styles from "./CButton.module.css";
export const CButton = ({ value, addClass, btnHandler }) => {
  return (
    <>
      <button onClick={btnHandler} className={`${styles.btn} ${addClass}`}>
        {value}
      </button>
    </>
  );
};

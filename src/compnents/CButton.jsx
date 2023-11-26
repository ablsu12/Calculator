import styles from "./CButton.module.css";
export const CButton = ({ value }) => {
  return (
    <>
      <button className={styles.btn}>{value}</button>
    </>
  );
};

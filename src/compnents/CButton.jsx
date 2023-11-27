import styles from "./CButton.module.css";
export const CButton = ({ children, addClass }) => {
  return (
    <>
      <button className={`${styles.btn} ${addClass}`}>
        {children}
      </button>
    </>
  );
};

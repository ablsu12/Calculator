import styles from "./CButton.module.css";
export const CButton = ({ value, round, double, lightColor }) => {
  return (
    <>
      <button
        className={
          round
            ? styles.roundedBtn
            : lightColor
              ? styles.lightColorBtn
              : double
                ? styles.doubleBtn
                : styles.btn
        }
      >
        {value}
      </button>
    </>
  );
};

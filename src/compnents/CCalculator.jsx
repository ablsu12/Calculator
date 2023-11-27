import styles from "./CCalculator.module.css";
import { CInputBox } from "./CInputBox";
import { CCalculatorBody } from "./CCalculatorBody";
import { CButton } from "./CButton";
import { useState } from "react";
import { CError, COverlay } from "./COverlay";
import { CErrorModal } from "./CErrorModal";
export function CCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isErrModalVisible, setIsErrModalVisible] = useState(false);
  const handleButtonClick = (value) =>
    setInput((prevState) => prevState + value);
  const equalBtnHandler = () => {
    try {
      setResult(eval(input));
    } catch (err) {
      setResult("");
      setInput("");
      setIsErrModalVisible(true);
    }
  };
  const closeErrorModal = () => setIsErrModalVisible(false);
  const ACBtnHandler = () => (setInput(""), setResult(""));
  const CBtnHandler = () =>
    setResult((prevState) => prevState.toString().slice(0, -1));
  const data = [
    {
      value: "AC",
      token: 1,
      handler: ACBtnHandler,
      addClass: `bg-light-color`,
    },
    {
      value: (
        <img
          width="25"
          height="25"
          className={"my-0 mx-auto"}
          src="https://img.icons8.com/ios-filled/50/clear-symbol.png"
        />
      ),
      token: 2,
      handler: CBtnHandler,
      addClass: `bg-light-color`,
    },
    {
      value: "%",
      token: 3,
      handler: handleButtonClick,
      addClass: `bg-light-color`,
    },
    {
      value: "/",
      token: 4,
      handler: handleButtonClick,
      addClass: `bg-light-color`,
    },
    {
      value: "7",
      token: 5,
      handler: handleButtonClick,
      addClass: `bg-dark-color`,
    },
    {
      value: "8",
      token: 6,
      handler: handleButtonClick,
      addClass: "bg-dark-color",
    },
    {
      value: "9",
      token: 7,
      handler: handleButtonClick,
      addClass: "bg-dark-color",
    },
    {
      value: "*",
      token: 8,
      handler: handleButtonClick,
      addClass: `bg-light-color`,
    },
    {
      value: "4",
      token: 9,
      handler: handleButtonClick,
      addClass: "bg-dark-color",
    },
    {
      value: "5",
      token: 10,
      handler: handleButtonClick,
      addClass: "bg-dark-color",
    },
    {
      value: "6",
      token: 11,
      handler: handleButtonClick,
      addClass: "bg-dark-color",
    },
    {
      value: " - ",
      token: 12,
      handler: handleButtonClick,
      addClass: `bg-light-color`,
    },
    {
      value: "1",
      token: 13,
      handler: handleButtonClick,
      addClass: "bg-dark-color",
    },
    {
      value: "2",
      token: 14,
      handler: handleButtonClick,
      addClass: "bg-dark-color",
    },
    {
      value: "3",
      token: 15,
      handler: handleButtonClick,
      addClass: "bg-dark-color",
    },
    {
      value: " + ",
      token: 16,
      handler: handleButtonClick,
      addClass: `bg-light-color`,
    },
    {
      value: " 0 ",
      token: 17,
      handler: handleButtonClick,
      addClass: `rounded-bl-lg bg-dark-color`,
    },
    {
      value: ".",
      token: 18,
      handler: handleButtonClick,
      addClass: `bg-dark-color`,
    },
    {
      value: "=",
      token: 19,
      handler: equalBtnHandler,
      addClass: `col-span-2 rounded-br-lg bg-light-color`,
    },
  ];
  return (
    <>
      <div className={styles.calculator}>
        {isErrModalVisible && (
          <COverlay>
            <CErrorModal closeHandler={closeErrorModal} />
          </COverlay>
        )}
        <CInputBox inputValue={input} result={result} />
        <CCalculatorBody>
          {data.map((x) => {
            return (
              <CButton
                value={x.value}
                btnHandler={() => x.handler(x.value)}
                addClass={x.addClass}
              />
            );
          })}
        </CCalculatorBody>
      </div>
    </>
  );
}

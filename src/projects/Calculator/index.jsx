import { useState } from "react";
import "./Calculator.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [displayExtra, setDisplayExtra] = useState("0");
  const [isExtraVisible, setIsExtraVisible] = useState(false);
  const [resetNext, setResetNext] = useState(false);

  const appendNumber = (num) => {
    let newCurrent = current;
    if (resetNext) {
      newCurrent = "";
      setResetNext(false);
      setIsExtraVisible(false);
    }

    if (num === "." && newCurrent.includes(".")) return;

    const updated = newCurrent + num;
    setCurrent(updated);
  };

  const appendOperator = (op) => {
    if (current === "" && op !== "-") return;
    if (current === "" && op === "-") {
      setCurrent("-");
      return;
    }

    if (current.trim().split(" ").length >= 3) {
      calculate();
    }

    setCurrent((prev) => prev + " " + op + " ");
  };

  const clearDisplay = () => {
    setCurrent("");
    setIsExtraVisible(false);
    setResetNext(false);
  };

  const deleteOne = () => {
    if (resetNext) return;
    if (current.length <= 1) {
      setCurrent("");
      return;
    }
    setCurrent(current.slice(0, -1));
  };

  const calculate = () => {
    try {
      const expression = current;
      const result = eval(current).toString();

      setCurrent(result);
      setDisplayExtra(expression + " =");
      setIsExtraVisible(true);
      setResetNext(true);
    } catch {
      setCurrent("Error");
      setTimeout(() => clearDisplay(), 1500);
    }
  };

  const percent = () => {
    if (current === "") return;
    setCurrent((parseFloat(current) / 100).toString());
  };

  return (
    <>
      <Navbar />
      <div className="calculator-wrapper">
        <div className="calculator">
          <div className="screen">
            <div
              className="display-extra"
              style={{ visibility: isExtraVisible ? "visible" : "hidden" }}
            >
              {displayExtra}
            </div>
            <div className="display">{current === "" ? "0" : current}</div>
          </div>

          <div className="buttons">
            <button className="btn btn-yellow" onClick={clearDisplay}>
              AC
            </button>
            <button className="btn btn-yellow" onClick={deleteOne}>
              C
            </button>
            <button className="btn btn-yellow" onClick={percent}>
              %
            </button>
            <button
              className="btn btn-orange"
              onClick={() => appendOperator("/")}
            >
              ÷
            </button>

            {[7, 8, 9].map((num) => (
              <button
                key={num}
                className="btn btn-grey"
                onClick={() => appendNumber(num.toString())}
              >
                {num}
              </button>
            ))}
            <button
              className="btn btn-orange"
              onClick={() => appendOperator("*")}
            >
              ×
            </button>

            {[4, 5, 6].map((num) => (
              <button
                key={num}
                className="btn btn-grey"
                onClick={() => appendNumber(num.toString())}
              >
                {num}
              </button>
            ))}
            <button
              className="btn btn-orange"
              onClick={() => appendOperator("-")}
            >
              -
            </button>

            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className="btn btn-grey"
                onClick={() => appendNumber(num.toString())}
              >
                {num}
              </button>
            ))}
            <button
              className="btn btn-orange"
              onClick={() => appendOperator("+")}
            >
              +
            </button>

            <button
              className="btn btn-grey btn-duo"
              onClick={() => appendNumber("0")}
            >
              0
            </button>
            <button className="btn btn-grey" onClick={() => appendNumber(".")}>
              .
            </button>
            <button className="btn btn-orange" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;

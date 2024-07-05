import "./App.css";
import { useState } from "react";

export const App = () => {
  const [inputValue, setInputvalue] = useState("");
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");

  const [isResult, setIsResult] = useState(false);

  const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const changeInputValue = (char) => {
    if (char === "+" || char === "-") {
      setOperator(char);
      setIsResult(false);
    } else {
      if (operator) {
        setOperand2(operand2 + char);
      } else {
        setOperand1(operand1 + char);
      }
    }

    setInputvalue(inputValue + char);
  };

  const viewResult = () => {
    let result = 0;
    setOperand2("");
    setIsResult(true);
    operator === "+"
      ? (result = Number(operand1) + Number(operand2))
      : (result = Number(operand1) - Number(operand2));
    setOperand1(result);
    console.log(result);
  };
  const resetValue = () => {
    setIsResult(false);
    setInputvalue("");
    setOperand1("");
    setOperand2("");
    setOperator("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="calc_body">
          <div className="calc_input">
            {isResult ? (
              <div className="inputValue_result">{operand1}</div>
            ) : (
              <div className="inputValue">{inputValue}</div>
            )}
          </div>
          <div className="calcMainbtns">
            <button onClick={resetValue} className="calcC_btn">
              C
            </button>
            <button
              onClick={() => changeInputValue("+")}
              className="calcPlusMinus_btn"
            >
              +
            </button>
            <button
              onClick={() => changeInputValue("-")}
              className="calcPlusMinus_btn"
            >
              -
            </button>
          </div>

          <div className="calcNums_btns">
            {NUMS.map((num, index) => {
              return (
                <button
                  onClick={() => changeInputValue(Number(num))}
                  className="calc_num"
                  key={index}
                >
                  {num}
                </button>
              );
            })}
          </div>
          <button onClick={viewResult} className="calc_result">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

// export const App = () => {
//   const [inputValue, setInputvalue] = useState("");
//   const [isInputValueRes, setInputValueRes] = useState(false);
//   const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const result = 0;
//   const changeInputValue = (char) => {
//     setInputvalue(inputValue + char);
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <div className="calc_body">
//           <div className="calc_input">
//             <div className="inputValue">{inputValue}</div>
//           </div>
//           <div className="calcMainbtns">
//             <button className="calcC_btn">C</button>
//             <button
//               onClick={() => changeInputValue("+")}
//               className="calcPlusMinus_btn"
//             >
//               +
//             </button>
//             <button
//               onClick={() => changeInputValue("-")}
//               className="calcPlusMinus_btn"
//             >
//               -
//             </button>
//           </div>

//           <div className="calcNums_btns">
//             {NUMS.map((num, index) => {
//               return (
//                 <button
//                   onClick={() => changeInputValue(num)}
//                   className="calc_num"
//                   key={index}
//                 >
//                   {num}
//                 </button>
//               );
//             })}
//           </div>
//           <button className="calc_result">=</button>
//         </div>
//       </div>
//     </div>
//   );
// };

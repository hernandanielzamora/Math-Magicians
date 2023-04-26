import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function CalculatorComp() {
  const [currentState, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    setState((currentState) => calculate(currentState, e.target.textContent));
    if (e.target.textContent === 'AC') {
      setState({ total: 0, next: null, operation: null });
    }
  };
  return (
    <>

      <div className="calculator-result">
        {currentState.total}
        {currentState.operation}
        {currentState.next}
      </div>
      <div className="calculator-keypad">
        <div>
          <button type="button" className="calc-btn" onClick={handleClick}>AC</button>
          <button type="button" className="calc-btn" onClick={handleClick}>+/-</button>
          <button type="button" className="calc-btn" onClick={handleClick}>%</button>
          <button type="button" className="calc-btn calculation-btn" onClick={handleClick}>÷</button>
        </div>
        <div>
          <button type="button" className="calc-btn" onClick={handleClick}>7</button>
          <button type="button" className="calc-btn" onClick={handleClick}>8</button>
          <button type="button" className="calc-btn" onClick={handleClick}>9</button>
          <button type="button" className="calc-btn calculation-btn" onClick={handleClick}>x</button>
        </div>
        <div>
          <button type="button" className="calc-btn" onClick={handleClick}>4</button>
          <button type="button" className="calc-btn" onClick={handleClick}>5</button>
          <button type="button" className="calc-btn" onClick={handleClick}>6</button>
          <button type="button" className="calc-btn calculation-btn" onClick={handleClick}>-</button>
        </div>
        <div>
          <button type="button" className="calc-btn" onClick={handleClick}>1</button>
          <button type="button" className="calc-btn" onClick={handleClick}>2</button>
          <button type="button" className="calc-btn" onClick={handleClick}>3</button>
          <button type="button" className="calc-btn calculation-btn" onClick={handleClick}>+</button>
        </div>
        <div>
          <button type="button" className="calc-btn zero-btn" onClick={handleClick}>0</button>
          <button type="button" className="calc-btn" onClick={handleClick}>.</button>
          <button type="button" className="calc-btn calculation-btn" onClick={handleClick}>=</button>
        </div>
      </div>
    </>
  );
}

import React from 'react';

export default function CalculatorComp() {
  return (
    <>
      <div className="calculator-result">0</div>
      <div className="calculator-keypad">
        <div>
          <button type="button" className="calc-btn">AC</button>
          <button type="button" className="calc-btn">+/-</button>
          <button type="button" className="calc-btn">%</button>
          <button type="button" className="calc-btn calculation-btn">÷</button>
        </div>
        <div>
          <button type="button" className="calc-btn">7</button>
          <button type="button" className="calc-btn">8</button>
          <button type="button" className="calc-btn">9</button>
          <button type="button" className="calc-btn calculation-btn">x</button>
        </div>
        <div>
          <button type="button" className="calc-btn">4</button>
          <button type="button" className="calc-btn">5</button>
          <button type="button" className="calc-btn">6</button>
          <button type="button" className="calc-btn calculation-btn">-</button>
        </div>
        <div>
          <button type="button" className="calc-btn">1</button>
          <button type="button" className="calc-btn">2</button>
          <button type="button" className="calc-btn">3</button>
          <button type="button" className="calc-btn calculation-btn">+</button>
        </div>
        <div>
          <button type="button" className="calc-btn zero-btn">0</button>
          <button type="button" className="calc-btn">.</button>
          <button type="button" className="calc-btn calculation-btn">=</button>
        </div>
      </div>
    </>
  );
}

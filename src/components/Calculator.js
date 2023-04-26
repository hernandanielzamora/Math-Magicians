import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

function CalculatorComp() {
  const [currentState, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (btn) => {
    setState((currentState) => calculate(currentState, btn.name));
    if (btn.name === 'AC') {
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
        <Buttons checkOperation={handleClick} />
      </div>
    </>
  );
}

export default function Calculator() {
  return (
    <CalculatorComp />
  );
}

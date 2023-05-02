import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import styles from '../styles/Calculator.module.css';

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
      <div className={styles.calculatorcontainer}>
        <div className={styles.calculatorresult}>
          {currentState.total}
          {currentState.operation}
          {currentState.next}
        </div>
        <div className="calculator-keypad">
          <Buttons checkOperation={handleClick} />
        </div>
      </div>
    </>
  );
}

export default function Calculator() {
  return (
    <CalculatorComp />
  );
}

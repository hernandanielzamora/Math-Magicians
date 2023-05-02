import React from 'react';
import Calculator from '../components/Calculator';
import styles from '../styles/Calculator.module.css';

const CalculatorPage = () => (
  <>
    <div className={styles.calcPageCont}>
      <h2 className={styles.calcPageTitle}>Let´s do some math!</h2>
      <Calculator />
    </div>
  </>
);

export default CalculatorPage;

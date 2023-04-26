const Buttons = (props) => {
  const buttonArray = [
    { className: 'calc-btn', name: 'AC' },
    { className: 'calc-btn', name: '+/-' },
    { className: 'calc-btn', name: '%' },
    { className: 'calc-btn calculation-btn', name: '÷' },
    { className: 'calc-btn', name: '7' },
    { className: 'calc-btn', name: '8' },
    { className: 'calc-btn', name: '9' },
    { className: 'calc-btn calculation-btn', name: 'x' },
    { className: 'calc-btn', name: '4' },
    { className: 'calc-btn', name: '5' },
    { className: 'calc-btn', name: '6' },
    { className: 'calc-btn calculation-btn', name: '-' },
    { className: 'calc-btn', name: '1' },
    { className: 'calc-btn', name: '2' },
    { className: 'calc-btn', name: '3' },
    { className: 'calc-btn calculation-btn', name: '+' },
    { className: 'calc-btn zero-btn', name: '0' },
    { className: 'calc-btn', name: '.' },
    { className: 'calc-btn calculation-btn', name: '=' },
  ];

  return (
    buttonArray.map((button) => <button type="button" onClick={() => props.checkOperation(button)} key={button.name} className={button.className}>{button.name}</button>)
  );
};

export default Buttons;

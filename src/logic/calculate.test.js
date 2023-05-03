import calculate from './calculate';

let calculationObj = { total: 0, next: 0, operation: null };

describe('Add Operation', () => {
  test('1 + 3 should be 4)', () => {
    calculationObj = calculate(calculationObj, '1');
    calculationObj = calculate(calculationObj, '+');
    calculationObj = calculate(calculationObj, '3');
    calculationObj = calculate(calculationObj, '=');
    expect(calculationObj.total).toEqual('4');
  });
});

describe('Substraction', () => {
  test('15 - 10 - 2 should be 3', () => {
    calculationObj = calculate(calculationObj, '15');
    calculationObj = calculate(calculationObj, '-');
    calculationObj = calculate(calculationObj, '10');
    calculationObj = calculate(calculationObj, '-');
    calculationObj = calculate(calculationObj, '2');
    calculationObj = calculate(calculationObj, '=');
    expect(calculationObj.total).toEqual('3');
  });
});

describe('Multiplication', () => {
  test('5 x 2 x 3 should be 30', () => {
    calculationObj = calculate(calculationObj, '5');
    calculationObj = calculate(calculationObj, 'x');
    calculationObj = calculate(calculationObj, '2');
    calculationObj = calculate(calculationObj, 'x');
    calculationObj = calculate(calculationObj, '3');
    calculationObj = calculate(calculationObj, '=');
    expect(calculationObj.total).toEqual('30');
  });
});

describe('All Clear (AC) ', () => {
  test('Should left All Clear', () => {
    calculationObj = calculate(calculationObj, '100');
    calculationObj = calculate(calculationObj, 'x');
    calculationObj = calculate(calculationObj, '40');
    calculationObj = calculate(calculationObj, 'x');
    calculationObj = calculate(calculationObj, '3');
    calculationObj = calculate(calculationObj, 'AC');
    expect(calculationObj.total).toEqual(null);
  });
});

describe('Calculating the module', () => {
  test('20 % 2 = 0', () => {
    calculationObj = calculate(calculationObj, '20');
    calculationObj = calculate(calculationObj, '%');
    calculationObj = calculate(calculationObj, '2');
    calculationObj = calculate(calculationObj, '=');
    expect(calculationObj.total).toEqual('0');
  });
});

describe('Division', () => {
  test('12 ÷ 2 ÷ 3 = 2', () => {
    calculationObj = calculate(calculationObj, '12');
    calculationObj = calculate(calculationObj, '÷');
    calculationObj = calculate(calculationObj, '2');
    calculationObj = calculate(calculationObj, '÷');
    calculationObj = calculate(calculationObj, '3');
    calculationObj = calculate(calculationObj, '=');
    expect(calculationObj.total).toEqual('2');
  });
});

describe('Invert the value', () => {
  test('5 to be -5', () => {
    const number = { next: '5' };
    const buttonName = '+/-';
    const operation = calculate(number, buttonName);
    const result = { next: '-5' };
    expect(operation).toEqual(result);
  });
});

describe('Return nothing when the input is not completed', () => {
  test('Only 12 as input then press = -> Returns Undefined', () => {
    calculationObj = calculate(calculationObj, '12');
    calculationObj = calculate(calculationObj, '=');
    expect(calculationObj.total).toEqual(undefined);
  });
});

import operate from './operate';

describe('Addition', () => {
  test('Operation: 4 + 3. Result expected = 7', () => {
    const operation = operate(4, 3, '+');
    expect(operation).toBe('7');
  });
});

describe('Multiplication', () => {
  test('Operation: 100 x 0.5 . Result expected = 50', () => {
    const operation = operate(100, 0.5, 'x');
    expect(operation).toBe('50');
  });
});

describe('Substraction', () => {
  test('Operation: 4 - 7. Result expected = -3', () => {
    const operation = operate(4, 7, '-');
    expect(operation).toBe('-3');
  });
});

describe('Division', () => {
  test('Operation: 9 ÷ 4 . Result expected = 2.25', () => {
    const operation = operate(9, 4, '÷');
    expect(operation).toBe('2.25');
  });
});

describe('Modulos', () => {
  test('Operation: 20 % 2 . Result expected = 0', () => {
    const operation = operate(20, 2, '%');
    expect(operation).toBe('0');
  });
});

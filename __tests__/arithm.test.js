const arithmFactory = require('./factories/arithm.factory');

describe('Arithmetic Tests', () => {
  it('Should calculate 2 + 3 = 5', () => {
    expect(arithmFactory.addition(2, 3)).toBe(5);
  });
  
  it('Should calculate 3 * 4 = 12', () => {
    expect(arithmFactory.multiplication(3, 4)).toBe(12);
  });
  
  it('Should calculate 5 - 6 = -1', () => {
    expect(arithmFactory.subtration(5, 6)).toBe(-1);
  });
  
  it('Should calculate 8 / 4 = 2', () => {
    expect(arithmFactory.division(8, 4)).toBe(2);
  });
  
});

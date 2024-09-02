import { addMarkup, addProfitMargin, calculateProfit, calculateProfitMargin } from '../margin';

describe('Margin calculation', () => {
  it('calculate profit margin correctly', () => {
    expect(addProfitMargin(100, 0.1)).toBe(111.11);
    expect(addProfitMargin(24, 0.1)).toBe(26.67);
    expect(addProfitMargin(100, 0)).toBe(100);
    expect(addProfitMargin(100, -0.1)).toBe(90.91);
    expect(addProfitMargin(100, -1)).toBe(50);
    expect(addProfitMargin(100, -9)).toBe(10);
  });

  it('calculate markup correctly', () => {
    expect(addMarkup(100, 0.1)).toBe(110);
    expect(addMarkup(24, 0.1)).toBe(26.4);
    expect(addMarkup(100, 0)).toBe(100);
    expect(addMarkup(100, -0.1)).toBe(90);
    expect(addMarkup(100, -1)).toBe(0);
  });

  it('calculate profit margin based on cost & sale amounts', () => {
    expect(calculateProfitMargin(100, 150)).toBe(0.33);
    expect(calculateProfitMargin(100, 110)).toBe(0.09);
    expect(calculateProfitMargin(100, 10)).toBe(-9);
  });

  it('calculate margin from cost and sale amounts correctly', () => {
    expect(calculateProfit(100, 150)).toBe(50);
    expect(calculateProfit(100, 110)).toBe(10);
    expect(calculateProfit(100, 10)).toBe(-90);
  });
});

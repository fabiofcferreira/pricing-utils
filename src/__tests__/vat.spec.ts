import { calculateGrossPrice, calculateNetPrice } from '..';

describe('VAT utils', () => {
  it('calculate gross price (adding VAT to net price)', () => {
    expect(calculateGrossPrice(16.249593495934959, 23)).toBe(19.99);
    expect(calculateGrossPrice(16.249593495934959, 21)).toBe(19.66);
    expect(calculateGrossPrice(16.249593495934959, 6)).toBe(17.22);
  });

  it('calculate net price (removing VAT from gross price)', () => {
    expect(calculateNetPrice(19.99, 23)).toBe(16.25);
    expect(calculateNetPrice(19.66, 21)).toBe(16.25);
    expect(calculateNetPrice(17.22, 6)).toBe(16.25);
  });
});

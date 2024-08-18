import { roundPrice } from '..';

describe('Rounding', () => {
  it('should round prices to nearest integer correctly', () => {
    const roundingPlaces = 0;

    expect(roundPrice(1.005, roundingPlaces)).toBe(1);
    expect(roundPrice(1.056, roundingPlaces)).toBe(1);
    expect(roundPrice(0.95, roundingPlaces)).toBe(1);
    expect(roundPrice(1.56, roundingPlaces)).toBe(2);
    expect(roundPrice(2.499, roundingPlaces)).toBe(2);
  });

  it('should round prices to 2 decimals correctly', () => {
    expect(roundPrice(1.005)).toBe(1.01);
    expect(roundPrice(1.056)).toBe(1.06);
    expect(roundPrice(1.09)).toBe(1.09);
    expect(roundPrice(1.115)).toBe(1.12);
    expect(roundPrice(1.114)).toBe(1.11);
  });

  it('should round prices to 3 decimals correctly', () => {
    const roundingPlaces = 3;

    expect(roundPrice(1.005, roundingPlaces)).toBe(1.005);
    expect(roundPrice(1.056, roundingPlaces)).toBe(1.056);
    expect(roundPrice(1.0009, roundingPlaces)).toBe(1.001);
    expect(roundPrice(1.00045, roundingPlaces)).toBe(1);
    expect(roundPrice(1.1157, roundingPlaces)).toBe(1.116);
  });
});

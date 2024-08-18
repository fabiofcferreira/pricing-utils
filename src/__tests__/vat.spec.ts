import { addVatToNetPrice } from '..';

describe('Adding VAT to net price', () => {
  it('should add VAT and round to 2 decimal places correctly', () => {
    expect(addVatToNetPrice(16.249593495934959, 23)).toBe(19.99);
    expect(addVatToNetPrice(16.249593495934959, 21)).toBe(19.66);
    expect(addVatToNetPrice(16.249593495934959, 6)).toBe(17.22);
  });
});

import { roundPrice } from './rounding';

/**
 * Adds VAT to net price
 * @param netPrice Price before VAT
 * @param rate Rate percentage (0-100)
 */
export function addVatToNetPrice(netPrice: number, rate: number, roundingPlaces = 2) {
  const rateFactor = rate / 100;

  return roundPrice(netPrice * (1 + rateFactor), roundingPlaces);
}

import { roundPrice } from './rounding';

/**
 * Calculate gross price (adding VAT to net price)
 * @param netPrice Net price (price without VAT)
 * @param rate Rate percentage (0-100)
 */
export function calculateGrossPrice(netPrice: number, rate: number, roundingPlaces = 2) {
  const rateFactor = rate / 100;

  return roundPrice(netPrice * (1 + rateFactor), roundingPlaces);
}

/**
 * Calculate net price from gross price (deducting VAT from gross price)
 * @param grossPrice Gross price (price with VAT)
 * @param vatRate Rate percentage (0-100)
 */
export function calculateNetPrice(grossPrice: number, vatRate: number, roundingPlaces = 2) {
  const rateFactor = vatRate / 100;

  return roundPrice(grossPrice / (1 + rateFactor), roundingPlaces);
}

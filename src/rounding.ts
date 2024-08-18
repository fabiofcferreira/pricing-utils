/**
 * Rounds a price up to the defined number of decimal places
 * @param price Floating point number
 * @param places Number of decimal places to round to
 * @returns Rounded number
 */
export function roundPrice(price: number, places = 2) {
  const expononent = 10 ** places;

  return Math.round((price + Number.EPSILON) * expononent) / expononent;
}

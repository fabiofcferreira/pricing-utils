import { roundPrice } from './rounding';

/**
 * Calculates amount with specified margin
 * @param amount Amount
 * @param rate Margin percentage rate (0-1, e.g., 0.25 for 25% margin)
 * @returns Amount with specified margin
 */
export function addProfitMargin(amount: number, rateFactor: number): number {
  return roundPrice(amount / (1 - rateFactor), 2);
}

/**
 * Calculates amount with specified markup
 * @param amount Amount
 * @param rate Markup percentage rate (0.25 for 25% markup)
 * @returns Amount with specified markup
 */
export function addMarkup(amount: number, rateFactor: number): number {
  return roundPrice(amount * (1 + rateFactor), 2);
}

/**
 * Calculates profit margin from cost and sale amounts
 * @param costAmount Amount for which the good was purchased
 * @param saleAmount Amount for which the good can be sold
 * @returns Margin percentage (25 for 25% margin)
 */
export function calculateProfitMargin(costAmount: number, saleAmount: number): number {
  return roundPrice((saleAmount - costAmount) / saleAmount, 2);
}

/**
 * Calculates profit from cost and sale amounts
 * @param costAmount Amount for which the good was purchased
 * @param saleAmount Amount for which the good can be sold
 * @returns Profit amount
 */
export function calculateProfit(costAmount: number, saleAmount: number): number {
  return roundPrice(saleAmount - costAmount, 2);
}

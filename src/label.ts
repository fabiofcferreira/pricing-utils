/**
 * Format to human readable label
 * @param amount Amount
 * @param currency Currency ISO code
 * @param locale Format locale (defaults to 'en-GB')
 */
export function formatToLabel({
  amount,
  currency,
  locale = 'en-GB',
}: {
  amount: number;
  currency: string;
  locale?: string;
}): string {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
    currencySign: 'standard',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

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

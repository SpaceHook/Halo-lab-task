export function getCurrency(currencies, wantedCurrency) {
  const foundCurrency = currencies.find(currency => currency[0] === wantedCurrency);

  if (!foundCurrency) {
    return;
  }

  return foundCurrency[1];
};

export function formatCurrency(value) {
  return Math.floor(value * 100) / 100;
}
function convertEuro (euro, currency) {
  switch (currency) {
    case 'USD':
      return euro * 1.15
    case 'GBP':
      return euro * 0.91
    case 'JPY':
      return euro * 122.86
    default: {
      throw new Error('Currency not handled')
    }
  }
}

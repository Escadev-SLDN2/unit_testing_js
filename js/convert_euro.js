function convertEuro (euro, currency) {
  switch (currency) {
    case 'USD':
      return euro * 1.3
    case 'GBP':
      return euro * 0.87
    case 'JPY':
      return euro * 124.77
    default: {
      throw new Error('Currency not handled')
    }
  }
}

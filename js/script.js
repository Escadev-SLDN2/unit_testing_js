const convertEuros = () => {
  const numberToConvert = document.getElementById('numberToConvert')

  const numberInUSD = document.getElementById('numberInUSD')
  const numberInGBP = document.getElementById('numberInGBP')
  const numberInJPY = document.getElementById('numberInJPY')

  numberInUSD.value = convertEuro(numberToConvert.value, 'USD')
  numberInGBP.value = convertEuro(numberToConvert.value, 'GBP')
  numberInJPY.value = convertEuro(numberToConvert.value, 'JPY')
}

const convertEuros = () => {
  const numberToConvert = document.getElementById('numberToConvert')
  const numberConverted = document.getElementById('numberConverted')

  numberConverted.value = euroToDollar(numberToConvert.value)
}

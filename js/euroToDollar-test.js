function assert (message, expr) {
  if (!expr) {
    output(false, message)
    throw new Error(message)
  }
  output(true, message)
}

function output (result, message) {
  var p = document.createElement('p')
  message += result ? ' : SUCCESS' : ' : FAILURE'
  p.style.color = result ? '#0c0' : '#c00'
  p.innerHTML = message
  document.getElementById('console').appendChild(p)
}

assert('1€ should return 0.87$', euroToDollar(1) === 0.87)
assert('2€ should return 1.74$', euroToDollar(2) === 1.74)

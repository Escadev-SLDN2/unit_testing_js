// ***************************************************************************************************

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

// ***************************************************************************************************

function testcase (message, tests) {
  var total = 0
  var succeed = 0
  var p = document.createElement('p')
  p.innerHTML = message
  document.getElementById('console').appendChild(p)
  for (test in tests) {
    total++
    try {
      tests[test]()
      succeed++
    } catch (err) {}
  }
  var p = document.createElement('p')
  p.innerHTML = 'succeed tests ' + succeed + '/' + total + '<hr />'
  document.getElementById('console').appendChild(p)
}

// ***************************************************************************************************

testcase('I convert euro to usd', {
  'I test with one euro': function () {
    assert('1€ should return 1,15$', convertEuro(1, 'USD') === 1.15)
  },
  'I test with two euros': function () {
    assert('2€ should return 2,3$', convertEuro(2, 'USD') === 2.3)
  }
})

testcase('i convert euro to gbp', {
  'I test with one euro': function () {
    assert('1€ should return 0,91£', convertEuro(1, 'GBP') === 0.91)
  },
  'I test with two euros': function () {
    assert('2€ should return 1,82£', convertEuro(2, 'GBP') === 1.82)
  }
})

testcase('i convert euro to jpy', {
  'I test with one euro': function () {
    assert('1€ should return 122.86¥', convertEuro(1, 'JPY') === 122.86)
  },
  'I test with two euros': function () {
    assert('2€ should return 245,72¥', convertEuro(2, 'JPY') === 245.72)
  }
})

testcase('I try with currency not handled by the function', {
  'I try with NZD': function () {
    var messsage
    try {
      convertEuro(1, 'NZD')
    } catch (err) {
      message = err
    }
    assert(
      'convert euro to nzd should throw error',
      message === 'Currency not handled'
    )
  }
})

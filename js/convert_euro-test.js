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
    assert('1€ should return 1,3$', convertEuro(1, 'USD') === 1.3)
  },
  'I test with two euros': function () {
    assert('2€ should return 2,6$', convertEuro(2, 'USD') === 2.6)
  }
})

testcase('i convert euro to gbp', {
  'I test with one euro': function () {
    assert('1€ should return 0,87£', convertEuro(1, 'GBP') === 0.87)
  },
  'I test with two euros': function () {
    assert('2€ should return 1,74£', convertEuro(2, 'GBP') === 1.74)
  }
})

testcase('i convert euro to jpy', {
  'I test with one euro': function () {
    assert('1€ should return 124,77¥', convertEuro(1, 'JPY') === 124.77)
  },
  'I test with two euros': function () {
    assert('2€ should return 249,54¥', convertEuro(2, 'JPY') === 249.54)
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

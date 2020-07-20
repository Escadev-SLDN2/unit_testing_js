// ***************************************************************************************************

function assert (message, expr) {
  if (!expr) {
    output(false, message)
    throw new Error(message)
  }
  output(true, message)
}

function output (result, message) {
  const p = document.createElement('p')
  message += result ? ' : SUCCESS' : ' : FAILURE'
  p.style.color = result ? '#0c0' : '#c00'
  p.innerHTML = message
  document.getElementById('console').appendChild(p)
}

// ***************************************************************************************************

function testcase (message, tests) {
  let total = 0
  let succeed = 0
  const hasSetup = typeof tests.setUp === 'function'
  const hasTeardown = typeof tests.tearDown === 'function'
  const p = document.createElement('p')
  p.innerHTML = message
  document.getElementById('console').appendChild(p)
  for (const test in tests) {
    if (test !== 'setUp' && test !== 'tearDown') {
      total++
    }
    try {
      if (hasSetup) {
        tests.setUp()
      }
      tests[test]()
      if (test !== 'setUp' && test !== 'tearDown') {
        succeed++
      }
      if (hasTeardown) {
        tests.tearDown()
      }
    } catch (err) {}
  }
  const p2 = document.createElement('p')
  const hr = document.createElement('hr')
  p2.innerHTML = 'succeed tests ' + succeed + '/' + total
  document.getElementById('console').appendChild(p2)
  document.getElementById('console').appendChild(hr)
}

// ***************************************************************************************************

testcase('I convert euro to usd', {
  setUp: function () {
    this.currency = 'USD'
  },
  'I test with one euro': function () {
    assert('1€ should return 1,15$', convertEuro(1, this.currency) === 1.15)
  },
  'I test with two euros': function () {
    assert('2€ should return 2,3$', convertEuro(2, this.currency) === 2.3)
  },
  'I test with one hundred euros': function () {
    assert('100€ should return 115$', convertEuro(100, this.currency) === 115)
  }
})

testcase('i convert euro to gbp', {
  setUp: function () {
    this.currency = 'GBP'
  },
  'I test with one euro': function () {
    assert('1€ should return 0,91£', convertEuro(1, this.currency) === 0.91)
  },
  'I test with two euros': function () {
    assert('2€ should return 1,82£', convertEuro(2, this.currency) === 1.82)
  },
  'I test with one hundred euros': function () {
    assert('100€ should return 91£', convertEuro(100, this.currency) === 91)
  }
})

testcase('i convert euro to jpy', {
  setUp: function () {
    this.currency = 'JPY'
  },
  'I test with one euro': function () {
    assert('1€ should return 122.86¥', convertEuro(1, this.currency) === 122.86)
  },
  'I test with two euros': function () {
    assert('2€ should return 245,72¥', convertEuro(2, this.currency) === 245.72)
  },
  'I test with one hundred euros': function () {
    assert('100€ should return 12.286¥', convertEuro(100, this.currency) === 12286)
  }
})

testcase('I try with currency not handled by the function', {
  setUp: function () {
    this.currency = 'NZD'
  },
  'I try with NZD': function () {
    var messsage
    try {
      convertEuro(1, this.currency)
    } catch (err) {
      message = err
    }
    assert(
      'convert euro to nzd should throw error',
      message === 'Currency not handled'
    )
  }
})

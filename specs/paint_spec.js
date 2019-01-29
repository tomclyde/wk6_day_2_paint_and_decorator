const assert = require('assert');
const Paint = require('../paint');


describe("Paint", function() {
  let decorator;

  beforeEach( function (){
    paint = new Paint(1, false)
  });

  it('can of paint is not empty when initialized', function () {    //'xit' skips test
    const actual = paint.empty_can;
    assert.strictEqual(actual, false);
  });

  it('can of paint has paint', function () {    //'xit' skips test
    const actual = paint.litres_of_paint;
    assert.strictEqual(actual, 1);
  });

  it('paint can empties itself', function () {
    paint.empty();
    const actual = paint.empty_can;
    assert.strictEqual(actual, true)
  })

});

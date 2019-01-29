const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');
const Room = require('../room');


describe("Decorator", function() {
  let decorator1;
  let decorator2;
  let can1;
  let can2;
  let can3;
  let room;
  let room2;

  beforeEach( function (){
    can1 = new Paint(1,false);
    can2 = new Paint(1,false);
    can3 = new Paint(1,false);
    can4 = new Paint(15, false);
    decorator1 = new Decorator();
    decorator2 = new Decorator();
    room = new Room(10, false);
    room2 = new Room(2, false);
  });

  it('decorator stock starts empty', function () {    //'xit' skips test
    const actual = decorator1.stock.length;
    assert.strictEqual(actual, 0);
  });

  it('decorator has stock', function () {    //'xit' skips test
    decorator2.addcan(can1);
    const actual = decorator2.stock.length;
    assert.strictEqual(actual, 1);
  });

  it('total paint stock in litres', function () {    //'xit' skips test
    decorator2.addcan(can1);
    decorator2.addcan(can2);
    decorator2.addcan(can3);
    console.log(decorator2);
    const actual = decorator2.calcTotalLitres();
    assert.strictEqual(actual, 3);
  });

  it('doesnt have enough paint to paint a room', function () {
    actual = decorator2.hasEnoughPaint(room);
    assert.strictEqual(actual, false);
  });

  it('does have enough paint to paint a room', function () {
    decorator2.addcan(can1);
    decorator2.addcan(can2);
    decorator2.addcan(can3);
    actual = decorator2.hasEnoughPaint(room2);
    assert.strictEqual(actual, true);
  });

  it('reduce stock to correct amount', function () {
    decorator2.addcan(can1);
    decorator2.addcan(can2);
    decorator2.addcan(can3);
    decorator2.removePaint(room2);
    actual = decorator2.calcTotalLitres();
    assert.strictEqual(actual, 1);
  });

});

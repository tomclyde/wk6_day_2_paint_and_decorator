const assert = require('assert');
const Room = require('../room');


describe("Room", function() {
  let room;

  beforeEach( function (){
    room = new Room(10, false);
  });

  it('room starts not painted', function () {    //'xit' skips test
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });

  it('room has a positive >0 area', function () {    //'xit' skips test
    const actual = room.area;
    assert.strictEqual(actual, 10);
  });

  it('room has been painted', function () {    //'xit' skips test
    room.paint_room();
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });


});

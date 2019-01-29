const Decorator = function(stock){
  this.stock = [];
}



Decorator.prototype.addcan = function(paint) {
  this.stock.push(paint);

}

Decorator.prototype.calcTotalLitres = function() {
  let total_litres = 0;
  for (let can of this.stock){
    total_litres += can.litres_of_paint;
  }
  return total_litres;

}

Decorator.prototype.hasEnoughPaint = function(room) {
  if (room.area <= this.calcTotalLitres()){
  return true;
  }
  else {
    return false
  }
}

Decorator.prototype.removePaint = function(room)  {
  if (room.area <= this.calcTotalLitres()){
    let amount_we_have = this.calcTotalLitres();
    let amount_needed = room.area;
    

  }
  else {
    return false
  }
}

}

module.exports = Decorator;

const Paint = function(litres_of_paint, empty_can = false){
  this.litres_of_paint = litres_of_paint;
  this.empty_can = empty_can;
}

Paint.prototype.empty = function() {
  this.empty_can = true;
  this.litres_of_paint = 0;
}

module.exports = Paint;

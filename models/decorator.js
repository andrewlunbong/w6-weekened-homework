const Decorator = function(){
    this.paintStock = []
    
}
Decorator.prototype.add = function (paint){
    this.paintStock.push(paint);
}

Decorator.prototype.totalStock = function(){
    let total = 0;
    for(const paint of this.paintStock){
        total += paint.litre;
    }
    return total;
}

Decorator.prototype.hasEnoughPaint = function(room1){
    return this.totalStock() >= room1.squareMeter
}

Decorator.prototype.decreasePaintStock = function (room2) {
    let areaToBePainted = room.squareMeter;
  
    for (const paint of this.totalStock) {
      if (paint.litre >= areaToBePainted) {
        paint.decreasePaint(areaToBePainted);
        areaToBePainted = 0;
        return;
      } else {
        areaToBePainted -= paint.litre;
        paint.empty();
      }
    }
  };



Decorator.prototype.paintRoom = function(room2){
    if(!this.hasEnoughPaint(room2)){
        return;
    }
    room2.paint();
    this.decreasePaintStock(room);

}


module.exports = Decorator;

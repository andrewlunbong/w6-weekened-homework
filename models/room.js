const Room = function(squareMeter){
this.squareMeter = squareMeter;
this.painted = false
};

Room.prototype.paint = function(){
    this.painted = true;
};

module.exports = Room;
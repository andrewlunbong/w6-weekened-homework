const Paint = function(litre){
    this.litre = litre;
    this.empty = false;

};

Paint.prototype.getEmpty = function(){
    this.empty = true;
};

module.exports = Paint;
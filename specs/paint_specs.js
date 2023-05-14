const assert = require('assert');
const Paint = require('../models/paint.js');


describe('Paint', function(){
    let paint1;
    let paint2;
    let paint3;
    

    beforeEach(function(){
        paint1 = new Paint(23);
        paint2 = new Paint(15);
        paint3 = new Paint(35);
       

    });

    it('should be able to check a number of litre of paint', function(){
        const actual = paint3.litre
        assert.strictEqual(actual, 35)
    });

    it('should be able to check if it is empty', function(){
        const actual = paint1.empty;
        assert.strictEqual(actual, false)
    });

    it('should be able to empty itself of paint', function(){
        paint2.getEmpty();
        const actual = paint2.empty
        assert.strictEqual(actual, true);
    });


})
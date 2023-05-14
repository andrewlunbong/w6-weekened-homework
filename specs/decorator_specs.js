const assert = require('assert');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');
const Decorator = require('../models/decorator.js');

describe('Decorator', function(){

    let paint1;
    let paint2;
    let paint3;
    let room1;
    let room2;
    let room3;
    let decorator;

    beforeEach(function(){
        paint1 = new Paint(23);
        paint2 = new Paint(15);
        paint3 = new Paint(35);
        room1 = new Room(20);
        room2 = new Room(30);
        room3 = new Room(25);
        decorator = new Decorator();
        
    });

    it('should start with empty paint stock', function(){
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add paint to paint stock', function(){
        decorator.add(paint1)
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [paint1]);
    });

    it('should be able to calculate the total litre of paint it has in stock', function(){
        decorator.add(paint1);
        decorator.add(paint2);
        decorator.add(paint3);
        const actual = decorator.totalStock();
        assert.strictEqual(actual, 73);
    });

    it('should have enough paint to paint room', function(){
        decorator.add(paint1);
        decorator.add(paint2);
        decorator.add(paint3);
        const expected = true;
        assert.deepStrictEqual(decorator.hasEnoughPaint(room1), expected);
    });

    it('should be able to calculate that it does have enough paint to paint a room', function(){
        decorator.add(paint3)
        const expected = true;
        assert.deepStrictEqual(decorator.hasEnoughPaint(room1), expected);
    });

    it('should be able to calculate that it does not have enough paint to paint a room', function(){
        decorator.add(paint2)
        const expected = false;
        assert.deepStrictEqual(decorator.hasEnoughPaint(room1), expected);
    });

})



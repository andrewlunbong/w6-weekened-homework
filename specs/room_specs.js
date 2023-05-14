const assert = require('assert');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');

describe('Room', function(){
    let room1;
    let room2;
    let room3;

    this.beforeEach(function(){
        room1 = new Room(20);
        room2 = new Room(30);
        room3 = new Room(25);
    });

    it('should have an area in square meter', function(){
        const actual = room1.squareMeter
        assert.strictEqual(actual, 20);
    });

    it('should start not painted', function(){
        const actual = room2.painted
        assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function(){
        room1.paint();
        const actual = room1.painted
        assert.strictEqual(actual, true);
    });




})
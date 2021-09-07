let assert = require("assert");
let fromWhere = require("../fromWhere");


describe('The fromWhere function...', function () {
    it('should return Belville if the vehicle registration number start with CY ', function () {
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return Paarl if the vehicle registration number start with CJ', function () {
        assert.equal(fromWhere('CJ'), 'Paarl');
        
    });
    it('should return Cape Town if the vehicle registration number start with CY', function () {
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('should return Some other place! if a vehicle registration number is not from the Western Cape', function () {
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
});
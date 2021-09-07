let assert = require("assert");
let greet = require("../fromBelville");


describe('The isFromBelville function...' , function(){
    it('should return true if a vehicle registration number is from Belville' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('should return false if a vehicle registration number is NOT from Belville' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
});
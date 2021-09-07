let assert = require("assert");
let FromBellville = require("../fromBelville");


describe('The isFromBelville function...' , function(){
    it('should return true if a vehicle registration number is from Belville' , function(){
        assert.equal(FromBellville('CY 123'), true);
    });
    it('should return false if a vehicle registration number is NOT from Belville' , function(){
        assert.equal(FromBellville('CJ 123'), false);
    });
});
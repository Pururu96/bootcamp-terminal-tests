let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe('The countAllPaarl function...', function () {
    it('should count the exact number of vehicle registration numbers from Paarl in a string', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));  
    });
});
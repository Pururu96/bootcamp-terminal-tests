let assert = require("assert");
let countRegNumber = require("../countRegNum");

describe('The countRegNumber function...' , function(){
    it('should count 3 & 1 if the number of vehicle registration numbers in two separate string strings are 3 & 1 repsectfully' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        var regCount = countRegNumber('CA 182736')

        assert.deepEqual[(regCount, 3), (regCount, 1)]
    });

    it('should count 5 if the number of vehicle registration numbers in a string are 5' , function(){
        var regCount = countRegNumber('CL 124,CY 567,CL 345,CJ 456,CL 341')
        assert.equal(regCount,5)
    });

});
let assert = require("assert");
let countRegNumber = require("../countRegNum");

describe('The countRegNumber function...' , function(){
    it('should count the number of vehicle registration numbers in a string' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        var regCount = countRegNumber('CA 182736')

        assert.deepEqual[(regCount, 3), (regCount, 1)]
    });
});
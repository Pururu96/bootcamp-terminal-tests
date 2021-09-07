let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('The countAllFromTown function...', function () {
    it('should count the exact number of vehicle registration numbers from Stellies in a string', function () {
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', 'CL'), 1)
    });

    it('should count the exact number of vehicle registration numbers from Kuilsriver in a string', function () {
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345,CF 456,CL 341', 'CF'), 0)
    });

    it('should count the exact number of vehicle registration numbers from Mpumalanga in a string', function () {
        assert.equal(countAllFromTown('45 GY 67,DRT FYL B,DOH 355 NC ,CF 456,CLD 341 L', 'MP'), 0)
    });
});
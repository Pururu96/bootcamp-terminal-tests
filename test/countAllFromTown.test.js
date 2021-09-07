let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('The countAllFromTown function...', function () {
    it('should count the exact number of vehicle registration numbers from Stellies specified town in a string', function () {
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3)
    });

    it('should count the exact number of vehicle registration numbers from Kuilsriver in a string', function () {
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'), 1)
    });

    it('should count the exact number of vehicle registration numbers from Mpumalanga in a string', function () {
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'MP'), 0)
    });
});
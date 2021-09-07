let assert = require("assert");
let fromStellies = require("../countAllFromTown");
let fromKuilsriver = require("../countAllFromTown");

describe('The countAllFromTown function...', function () {
    it('should count the exact number of vehicle registration numbers from ANY town in a string', function () {
        assert.equal(fromStellies('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3)
        assert.equal(fromKuilsriver('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'), 1)
    });
});
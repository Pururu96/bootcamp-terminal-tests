let assert = require("assert");
let fromStellies = require("../countAllFromTown");
let fromKuilsriver = require("../countAllFromTown");

describe('The countAllFromTown function...', function () {
    it('should count the exact number of vehicle registration numbers from ANY town in a string', function () {
        assert.equal(fromStellies, 3)
        assert.equal(fromKuilsriver, 1)
    });
});
let assert = require("assert");
let transportFee = require("../transportFee");


describe('The transportFee function...', function () {
    it('should return a R20 transport cost if I work a morning shift', function () {
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return a R10 transport cost if I work an afternoon shift', function () {
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
    it('should return no transport cost if I work nightshift', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});
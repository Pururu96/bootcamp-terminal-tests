let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function...', function () {
    it('should return true if the arguement is a weekday', function () {
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return false if the arguement is NOT a weekday', function () {
        assert.equal(isWeekday('Saturday'), false);
    });
});
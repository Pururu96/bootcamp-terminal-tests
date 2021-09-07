let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The isWeekday function...', function () {
    it('should show the exact number of years ago a past date is', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});
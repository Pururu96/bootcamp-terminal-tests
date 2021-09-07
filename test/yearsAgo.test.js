let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function...', function () {
    it('should calculate the exact number of years ago the year 1976 is', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it('should calculate the exact number of years ago the year 2000 is', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});
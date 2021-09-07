let assert = require("assert");
let regCheck = require("../regCheck");


describe('The regCheck function...', function () {
    it('should return true if a vehicle registration number is from Gauteng,', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('should return false if a vehicle registration number is NOT from Gauteng', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('should return true if a vehicle registration number is from Limpopo', function () {
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('should return false if a vehicle registration number is NOT from Limpopo', function () {
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('should return true if a vehicle registration number is from Eastern Cape', function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
    it('should return false if a vehicle registration number is NOT from Eastern Cape', function () {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('should return true if a vehicle registration number is from Mpumalanga', function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    it('should return false if a vehicle registration number is NOT from Mpumalanga', function () {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});
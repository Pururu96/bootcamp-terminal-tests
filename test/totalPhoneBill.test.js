let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('The totalPhoneBill function...' , function(){
    it('should return R7.45 when 2 calls and 3 smss are made' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return R3.40 when a call and an sms is made' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('should return R1.30 when 2 smss are made' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});
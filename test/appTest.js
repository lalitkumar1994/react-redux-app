const assert  = require('chai').assert;
const plusBankBalance = require('../src/bankbalanceAction').plusBankBalance;
const minusBankBalance = require('../src/bankbalanceAction').minusBankBalance;
const donateMyCashToCharity = require('../src/bankbalanceAction').donateMyCashToCharity;


describe('App bank balance action',function(){
   
    it('plus should return {"type": "plusBankBalance","balance": 10000}',function(){
        let result = plusBankBalance(10000);
        assert.equal(result,{"type": "plusBankBalance","balance": 10000});
    })
    
    it('minus should return {"type": "minusBankBalance","balance": 10000}',function(){
        let result = minusBankBalance(10000);
        assert.equal(result,{"type": "minusBankBalance","balance": 10000});
    })

    it('donate should return {"type": "donateMyCashToCharity","balance": 0}',function(){
        let result = donateMyCashToCharity(0);
        assert.equal(result,{"type":"donateMyCashToCharity","balance": 0});
    })

});
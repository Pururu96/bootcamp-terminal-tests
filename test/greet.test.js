// describe('The tests...' , function(){
//     it('should show if the correct person is greeted' , function(){
//        assert.equal(greet('Bob'), 'Hello, Bob');
//        assert.equal(greet('Sam'), 'Hello, Sam');
//     });
// });

let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});
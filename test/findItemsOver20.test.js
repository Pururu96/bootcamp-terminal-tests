let assert = require("assert");
let findItemsOver20 = require("../fromWhere");
// let results = require("../fromWhere")

var itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
  ];
  
  var results = [
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
  ];
  
  var itemList2 = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 19 },
    { name: 'bananas', qty: 17 },
    { name: 'apples', qty: 3 },
  ];
  
  var results2 = [];
  
  var itemList3 = [
    { name: 'apples', qty: 40 },
    { name: 'pears', qty: 20 },
    { name: 'bananas', qty: 23 },
    { name: 'apples', qty: 37 }
  ];
  
  var results3 = [
    { name: 'apples', qty: 40 },
    { name: 'bananas', qty: 23 },
    { name: 'apples', qty: 37 }
  ];
  
describe('The findItemsOver20 function...', function () {
    it('should return all the products that have a quantity over 20 in the itemList', function () {
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it('should return all the products that have a quantity over 20 in itemList2', function () {
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
    it('should return all the products that have a quantity over 20 in itemList3', function () {
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
});
// var fromStellies = module.exports('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
// var fromKuilsriver = module.exports('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');

module.exports = function(vehReg, RegLoc) {
  var vehRegNum = vehReg.split(',');
  var counter = 0;
  for (var i = 0; i < vehRegNum.length; i++) {
    //Get each item in the loop
    const currentVehReg = vehRegNum[i].trim();
    //Check if this is the item you are looking for
    if (currentVehReg.includes(RegLoc)) {
      counter++;
    }
    else{
      counter = 0;
    }
  }
  return counter;
};
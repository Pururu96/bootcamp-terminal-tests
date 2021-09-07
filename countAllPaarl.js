module.exports = function(vehReg){
    var vehRegNum = vehReg.split(',');
      var counter=0;
      for(var i=0; i<vehRegNum.length; i++){
        var currentVehReg = vehRegNum[i].trim();
        if(currentVehReg.startsWith('CJ')){
          counter++;
        }    
      }
      return counter;
    }
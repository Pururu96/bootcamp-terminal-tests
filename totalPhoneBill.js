module.exports = function(callsAndSmsString){
    var callsAndSmss = callsAndSmsString.split(',');
    let total=0;
    //Loop over each item
    for(var i=0; i<callsAndSmss.length; i++){
     const currentCallOrSms = callsAndSmss[i].trim();
      if(currentCallOrSms.includes('call')){
       total+= 2.75;
      }
      else if(currentCallOrSms.includes('sms')){
       total+= 0.65;
      } 
    } 
    return 'R' + total.toFixed(2); 
  }
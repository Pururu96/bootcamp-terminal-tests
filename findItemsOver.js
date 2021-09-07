function findItemsOver(object,threshold){ 
    var itemsOver20 = [];
   for(var prop in object){
     if(object[prop].qty>threshold){
      itemsOver20.push(object[prop]);
     }
  //console.log(object[prop].length);
   } 
   return itemsOver20;
  }
module.exports = function(salesData){
    const salesdataMap = {};
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      salesdataMap[salesdata.department] = 0;
    }
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      var currentDepartmentTotal = salesdataMap[salesdata.department];
      currentDepartmentTotal += salesdata.sales;
      salesdataMap[salesdata.department] = currentDepartmentTotal;
    }
    var maxSales = 0;
    var currentDepartment = '';
    for(const salesdepartment in salesdataMap){
    
    const currentSalesDepartmentsales = salesdataMap[salesdepartment];
    if(currentSalesDepartmentsales > maxSales){
         maxSales = currentSalesDepartmentsales;
         currentDepartment = salesdepartment;
         }
    }
      return currentDepartment;
    }
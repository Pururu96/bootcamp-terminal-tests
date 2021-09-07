module.exports = function(specificYear){
    const yearToday = new Date().getFullYear();
    return yearToday - specificYear;
  };
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 const month = date.getMonth()
 const season =['winter', 'spring', 'summer', 'autumn'];
 const months = [
  [11, 12, 1]
  [2, 3, 4]
  [5, 6, 7]
  [8, 9, 10]]
  months.forEach((season, index) => {
 if (season.includes(month)) {}
    
  });

  
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

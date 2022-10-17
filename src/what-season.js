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
  let season ;
  try {season = date.getMonth();
  } catch (e) {return 'Unable to determine the time of year!'} 
 if (Object.prototype.toString.call(data) !== '[object Data]') {
  throw new Error('Invalid data')
 }
 if (season < 1 || season === 0) {
  return 'Winter'
 } else if (season <= 4) {
  return 'Spring'
 } else if (season <= 7) {
  return 'summer'
 } else if (season <=10) {
  return 'autumn'
  } else {
    throw new Error('Invalid data');
  }
   console.dir(date)
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

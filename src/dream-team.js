const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let teamN = '';
  let newArray = members.sort();
   for (const world of newArray) {
    if (typeof world !== 'string') continue;
    if (typeof world === 'string') {
      teamN += world.trim().toUpperCase()[0];
    } else {return false}
   }
   return teamN
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};

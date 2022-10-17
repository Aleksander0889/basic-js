const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = []
  var ln;
if (s1.length > s2.length) ln = s1.length; else ln = s2.length;


for (var i = 0; i < ln; i++)
{
    if (s1[i] == s2[i]) {
         result.push(s2[i]);
    }
}
return result
}
module.exports = {
  getCommonCharacterCount
};

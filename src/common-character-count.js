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
  var cache;
  var cache2;

  var ln1 = s1.length
  ln2 = s2.length;

  for (var i = 0; i < ln1; ++i)
  {
      cache = array1[i];
      for (var j = 0; j < ln2; ++j)
      {
          cache2 = array2[j];
          if (cache === array2[j])
          {
              console.log('найдено совпадение: ' + cache);
              result.push(array2[j]);
          }
   
   }
}

return result
}

module.exports = {
  getCommonCharacterCount
};

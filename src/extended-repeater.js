const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 if (options.separator === undefined) {
  options.separator = '+';
   }
 if (options.additionSeparator === undefined) {
  options.additionSeparator =  '|';
   }
   const repeatFun = (separator, string = '', repeatTimes = 1) => {
    let  result = [];
    for (let i = 0; i < repeatTimes; i++) {
      result.push(String(string));
    }
    return result.join(separator);
   }
   const allAdd = repeatFun(options.additionSeparator, options.addition, options.additionRepeatTimes);
   options.separator = allAdd + options.separator;
   return repeatFun(options.separator, str, options.repeatTimes) + allAdd;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

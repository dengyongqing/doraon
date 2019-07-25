


  /**
 * 
 * @desc   对象链路是否有效
 * @param  {source, sourceStr} n 
 * @return {}
 */
function isChainValid(source, sourceStr) {
    let result = true;
    if (source && sourceStr) {
      const list = sourceStr.split('.');
      const len = list.length;
      let temp = source;
      for (let i = 0; i < len; i++) {
        if (i !== 0) {
          temp = temp[list[i]];
          if (!temp) {
            result = false;
            break;
          }
        }
      }
    } else {
      return false;
    }
    return result;
}

module.exports = isChainValid
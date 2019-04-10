/**
 * 
 * @desc 判断两个数组是否相等
 * @param {Array} arr
 * @return {Array}
 */
function noRepeat(arr) {
    return [...new Set(arr)];
}

module.exports = noRepeat;
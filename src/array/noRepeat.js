/**
 * 
 * @desc 判断两个数组是否相等
 * @param {Array} arr
 * @return {Boolean}
 */
function noRepeat(arr) {
    return [...new Set(arr)];
}

module.exports = noRepeat;
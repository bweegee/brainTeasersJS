/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let left = 1
      let right = n
      const map = new Map()
      while (left <= right) {
        const mid = Math.floor((right + left) / 2)
        map.set(mid, isBadVersion(mid))
        if (mid === right && map.get(mid)) return mid
        if (map.get(mid) && map.has(mid - 1) && map.get(mid - 1) == false) {
          return mid
        }
        if (map.get(mid)) {
          right = mid
        }
        if (!map.get(mid)) {
          left = mid + 1
        }
      }
      return index
    };
};

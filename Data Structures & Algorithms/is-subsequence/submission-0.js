class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let fast = 0;
        let slow = 0;

        //         s
        //  "neetcode"
        //  "node"
        //   f

        while (fast < t.length) {
            if (t[fast] === s[slow]) {
                slow += 1;
            }
            fast += 1;
        }

        return slow === s.length;
    }
}

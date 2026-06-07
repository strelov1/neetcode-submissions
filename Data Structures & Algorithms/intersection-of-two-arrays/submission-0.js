class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        //  nums1 = [4,9,5]
        //  nums2 = [9,8,4]
        nums1 = new Set(nums1)
        nums2 = new Set(nums2)
        const result = [];
        for (let n in nums1) {
            if (num2.has(n)) {
                result.push(n);
            }
        }
        return result;
    }
}

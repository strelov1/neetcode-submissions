class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        //nums1 = [4,9,5]
        //nums2 = [9,4,9,8,4]

        nums1.sort((a,b) => a-b);
        nums2.sort((a,b) => a-b);
    
        let i = 0;
        let j = 0;
        let result = [];

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                if (!result.length && result[result.length-1] !== nums1[i]) {
                    result.push(nums1[i]);
                }
                i++;
                j++;
            } else if (nums1[i] > nums2[j]) {
                j++;
            } else {
                i++;
            }
        }
        return result;
    }
}

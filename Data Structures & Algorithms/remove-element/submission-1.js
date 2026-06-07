class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let slow = 0;

        for (let fast = 0; fast < nums.length; fast++) {
            if (nums[fast] !== val) {
                nums[slow] = nums[fast];
                slow += 1;
            }
        }
        return slow;
    }
}

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # [4,5,6] 10 // target - i = x
        # {6:0, 5:1, 4:2}
        store = {}

        for i in range(len(nums)):
            n = nums[i]
            target_sum = target - n
            if n in store:
                return [store[n], i]
            store[target_sum] = i
        
        return []
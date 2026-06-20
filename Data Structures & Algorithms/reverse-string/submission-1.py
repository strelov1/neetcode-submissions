class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        h = 0
        t = len(s)-1
        while h < t:
            s[h], s[t] = s[t], s[h]
            h += 1
            t -= 1
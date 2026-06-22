class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # "racecar"
        # "carrace"
        letters = {}
        for i in range(len(s)):
            if s[i] in letters:
                letters[s[i]] += 1
            else:
                letters[s[i]] = 1

        for i in range(len(t)):
            if t[i] in letters:
                letters[t[i]] -= 1
            else:
                return False

        for k in letters:
            if letters[k] != 0:
                return False

        return True
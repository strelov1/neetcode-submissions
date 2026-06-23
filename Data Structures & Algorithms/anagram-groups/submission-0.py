class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # ["act","pots","tops","cat","stop","hat"]
        # [["hat"],["act", "cat"],["stop", "pots", "tops"]]

        prefix = {}
        result = []
        for i in range(len(strs)):
            word = "".join(sorted(strs[i]))
            if word not in prefix:
                prefix[word] = []
            prefix[word].append(strs[i])

        # {"act": [ac]}
        for k in prefix:
            result.append(prefix[k])
        
        return result
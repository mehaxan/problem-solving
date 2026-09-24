# Given an array 'ar' of integers 
# and a positive integer 'k',
# determine the number of (i, j) pairs
# where (i < j) and ar[i] + ar[j] is divisible by k.

# ar[n]: array itself with n length
# k: divisor
# @return: count of pairs

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from __helpers.get_pairs import get_pairs

def divisible_sum_pairs(n, k, ar):
    count = 0

    pairs = get_pairs(ar)

    for a, b in pairs:
        if (a + b) % k == 0:
            count += 1

    return count


if __name__ == "__main__":
    assert divisible_sum_pairs(6, 3, [1, 3, 2, 6, 1, 2]) == 5
    assert divisible_sum_pairs(5, 3, [1, 2, 3, 4, 5]) == 4
    assert divisible_sum_pairs(1, 1, [1]) == 0

    print("All test cases passed!")

#!/usr/bin/env python3

"""
Function that return the sum of a mixed list
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Return the sum of mxd_lst
    """
    total = 0
    for number in mxd_lst:
        total += number
    return total

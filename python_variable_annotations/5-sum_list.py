#!/usr/bin/env python3

"""
Function that return the sum of a list of floats
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Return the sum of input_list
    """
    total = 0
    for number in input_list:
        total += number
    return total

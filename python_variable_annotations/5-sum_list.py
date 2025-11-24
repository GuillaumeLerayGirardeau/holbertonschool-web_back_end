#!/usr/bin/env python3

from typing import List

"""
Function that return the sum of a list of floats
"""


def sum_list(input_list: List[float]) -> float:
    """
    Return the sum of input_list
    """
    total = 0
    for number in input_list:
        total += number
    return total

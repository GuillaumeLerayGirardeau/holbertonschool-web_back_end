#!/usr/bin/env python3

"""
Function that return a function that multiplies a float
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Return a tuple with k and the square of v
    """
    def multiply_float(n: float):
        return n * multiplier

    return multiply_float

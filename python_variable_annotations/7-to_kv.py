#!/usr/bin/env python3

"""
Function that return a tuple of a string and the square of a int OR float
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple with k and the square of v
    """
    return (k, v*v)

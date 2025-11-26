#!/usr/bin/env python3

"""
Function that return a documented function
"""

from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Element length functon documented
    """
    return [(i, len(i)) for i in lst]

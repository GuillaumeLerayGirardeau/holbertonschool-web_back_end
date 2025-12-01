#!/usr/bin/env python3

"""
Function that define the size and the start point of the page
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """
    Return a tuple with start and end of a page
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)

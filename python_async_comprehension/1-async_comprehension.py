#!/usr/bin/env python3

"""
Function that loop 10 times, wait 1 second, then yield a random number
"""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Execute the function async_generator
    """
    return [i async for i in async_generator()]

#!/usr/bin/env python3

"""
Function that execute the function wait_random n time
"""

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute wait_random n times and return a list of floats
    """
    tasks = [wait_random(max_delay) for i in range(n)]
    all_values = await asyncio.gather(*tasks)
    return all_values

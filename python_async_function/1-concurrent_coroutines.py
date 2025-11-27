#!/usr/bin/env python3

"""
Function that execute the function wait_random n time
"""

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute wait_random n times and return a list of floats ordered asc
    """
    all_values = []
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    for task in asyncio.as_completed(tasks):
        new_value = await task
        all_values.append(new_value)

    return all_values

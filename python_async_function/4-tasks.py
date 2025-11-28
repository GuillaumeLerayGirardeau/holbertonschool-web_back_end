#!/usr/bin/env python3

"""
Function that execute the function task_wait_n
"""

import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute task_wait_n and return a list of floats ordered asc
    """
    all_values = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    for task in asyncio.as_completed(tasks):
        new_value = await task
        all_values.append(new_value)

    return all_values

#!/usr/bin/env python3

"""
Function that wait a random amount of time before printing it
"""

import asyncio
import random


async def wait_random(max_delay=10):
    """
    Wait a random amount of time between 0 and max_delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

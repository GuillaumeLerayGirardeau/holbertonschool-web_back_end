#!/usr/bin/env python3

"""
Function that define the size and the start point of the page
"""

from typing import Tuple, List
import csv
import math


def index_range(page: int, page_size: int) -> Tuple:
    """
    Return a tuple with start and end of a page
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        page_index = index_range(page, page_size)
        with open("Popular_Baby_Names.csv") as csvfile:
            data = csv.reader(csvfile, delimiter=' ')
            list_data = list(data)
            return_list = []
            if len(list_data) >= page_index[1]:
                start = page_index[0]
                while start < page_index[1]:
                    return_list.append(list_data[start])
                    start += 1
            return return_list

#!/usr/bin/env python3

"""
Lists all documents in a collection
"""


def list_all(mongo_collection):
    """
    Convert the collection in a list
    """
    return list(mongo_collection.find())

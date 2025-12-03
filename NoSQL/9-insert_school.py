#!/usr/bin/env python3

"""
Inserts a new document in a collection based on kwargs
"""


def insert_school(mongo_collection, **kwargs):
    """
    Insert a new document
    """
    new_school = mongo_collection.insert_one(kwargs)
    return new_school.inserted_id

#!/usr/bin/env python3

"""
Returns the list of school having a specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Return a list of schools based on specific topics
    """
    return list(mongo_collection.find({'topics': topic}))

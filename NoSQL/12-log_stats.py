#!/usr/bin/env python3

"""
Script that provides some stats about Nginx logs stored in MongoDB
"""

from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print(str(collection.count_documents({})) + " logs")
    print("Methods:")
    for m in method:
        print(f"\tmethod {m}: " +
              str(collection.count_documents({'method': m})))
    print(str(collection.count_documents({'path': '/status'})) +
          " status check")

import time

filter_list = ["#", "like", "insert", "update", "delete", "drop", "/", "join", "and", "not", "=", "false", "select", "from", "*", "any", "(", "all", ">", "<","union", "limit", "null", "into", "or", ";", '"', "|"]

def sql_filter(data):
    data = data.lower()
    for filter in filter_list:
        if filter in data:
            return True
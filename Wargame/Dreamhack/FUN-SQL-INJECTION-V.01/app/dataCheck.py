import os
import base64

session_storage = {}
admin_storage = {}

flag = [""]

def createSession(username, isAdmin=False):
    if isAdmin == True:
        admin_id = os.urandom(16).hex()
        admin_storage[admin_id] = username
        return admin_id
    session_id = os.urandom(32).hex()
    session_storage[session_id] = username
    return session_id
    
def check_login(cookie):
    try:
        result = session_storage[cookie]
        if result == "admin":
            return True
        else:
            return False
    except:
        return False

def getSessionData(session, adminSession=None):
    try:
        id = session_storage[session] if adminSession == None else admin_storage[adminSession]
        return id
    except:
        return None

    
def check_solve(resp, num):
    if resp == None:
        return base64.b64encode(flag[num].encode("utf-8")).decode()
    resp.set_cookie("solve", base64.b64encode(flag[num].encode("utf-8")).decode())
    return True
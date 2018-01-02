import json
import pymssql
from bottle import run, route, response

@route('/get/verifyUser/<username>')
def checkForValidUsername(username):
    connection = pymssql.connect("sql11.ezhostingserver.com", "admin-main", "passtheword-1", "HadA_Main")
    cursor = connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM Users WHERE name='" + username + "'")
    res = cursor.fetchone()
    connection.close()
    print(res)
    returnData = {
        'isValid': False
    }
    if (res[0] == 1):
        returnData['isValid'] = True

    response.content_type = 'application/json'
    return json.dumps(returnData)

#
# FEED
#

@route('/get/feedItems/<currentIndex>/<numRequestedItems>/<filters>')
def getFeedItems(currentIndex, numRequestedItems, filters):
    return None
    # currentIndex: integer 0 -> inf, API should verify isn't past bounds of posts in existance
    # numRequestedItems: integer 1 -> inf 
    # filters: string, CSV for filters. user should be USER$:$username, category should be CATEGORY$:$categoryname
    # should return next X number of posts adhering to the user specifications

@route('/get/trendingItems/')
def getTrendingItems():
    return json.dumps({'temp': 'data'})
    # should grab some recently popular categories, terms, and users from the db and return an array of trendItem objects
#
# AUTHENTICATION
#

@route('/get/auth/verifyUsername/<username>')
def getUserAuthentication(username):
    # username: String
    # should verify user is a valid user. Return true/false
    connection = pymssql.connect("sql11.ezhostingserver.com", "admin-main", "passtheword-1", "HadA_Main")
    cursor = connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM Users WHERE name='" + username + "'")
    res = cursor.fetchone()
    connection.close()
    returnData = {
        'isValidUsername': False
    }
    if (res[0] == 1):
        returnData['isValidUsername'] = True

    response.content_type = 'application/json'
    return json.dumps(returnData)

@route('/get/auth/authenticateUser/<username>/<password>')
def getUserAuthentication(username, password):
    # username: String
    # password: String
    # should verify user credentals and authenticate them, returning true/false authenticated
    connection = pymssql.connect("sql11.ezhostingserver.com", "admin-main", "passtheword-1", "HadA_Main")
    cursor = connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM Users WHERE name='" + username + "' AND password='" + password + "'")
    res = cursor.fetchone()
    connection.close()
    returnData = {
        'shouldBeAuthenticated': False
    }
    if (res[0] == 1):
        returnData['shouldBeAuthenticated'] = True

    response.content_type = 'application/json'
    return json.dumps(returnData)

@route('/post/auth/createUser/<username>/<password>')
def createNewUser(username, password):
    # username: String
    # password: String
    # should insert user into user DB and return void. Request service should then call getUserAuthentication with the new credentials.
    connection = pymssql.connect("sql11.ezhostingserver.com", "admin-main", "passtheword-1", "HadA_Main")
    cursor = connection.cursor()
    cursor.execute("INSERT INTO Users VALUES('" + username + "','" + password + "')")
    connection.close()
    returnData = {
        'didCreateNewUser': True
    }
    response.content_type = 'application/json'
    return json.dumps(returnData)
#
# ACTIONS
#

@route('/post/action/publishPost/<username>/<postCategory>/<postContent>')
def publishNewPost(username, postCategory, postContent):
    # username: String, valid to user or userID??
    # postCategory: String, valid post Cateogry (should be defined somewhere publicly) (perhaps in a table)
    # postContent: String, perhaps character limited and Web-Safe
    connection = pymssql.connect("sql11.ezhostingserver.com", "admin-main", "passtheword-1", "HadA_Main")
    cursor = connection.cursor()
    cursor.execute("""
                    DECLARE @uID int
                    SET @uID - (SELECT user_id FROM Users WHERE name='{}')
                    INSERT INTO Posts (post_content, post_date, post_user, post_category, liked_count)
                    VALUES ('{}', CURRENT_TIMESTAMP, @uID, '{}', 0)
                    """.format(username, postContent, postCategory))
    connection.close()
    returnData = {
        'didSubmitPost': True
    }
    response.content_type = 'application/json'
    return json.dumps(returnData)

run(host='localhost', port=3000, debug=True)
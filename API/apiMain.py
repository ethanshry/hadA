# Thoughts:
# pymssql on server is supposedly better for linuix
# pyodbc was working local but no longer
# believe it was just a driver issue working on the remote- is tutorial on this tho
# see: https://help.pythonanywhere.com/pages/MSSQLServer/
# also- divergence in remote code, see error logs n stuff
# @ BROKEN STATE

import json
import pyodbc
from bottle import default_app, route, response

serverCredentials = {
    'server': "sql11.ezhostingserver.com",
    'database': "HadA_Main",
    'username': "admin-main",
    'password': "passtheword-1"
}

returnData = []
#connection = pyodbc.connect('DRIVER={ODBC Driver 13 for SQL Server};SERVER=' + serverCredentials['server'] + ';DATABASE=' + serverCredentials['database'] + ';UID=' + serverCredentials['username'] + ';PWD=' + serverCredentials['password'])
connection = pyodbc.connect('DRIVER={ODBC Driver 13 for SQL Server};SERVER=sql11.exhostingserver.com;DATABASE=HadA_Main;UID=admin-main;PWD=passtheword-1')

cursor = connection.cursor()
cursor.execute("SELECT name, password FROM Users WHERE name='bill'")
rows = cursor.fetchall()
for row in rows:
    returnData.append(row)
print(returnData)

#@route('/get/verifyUser/<username>')
def checkForValidUsername(username):
    cursor.execute("SELECT COUNT(*) FROM Users WHERE name='" + username + "'")
    res = cursor.fetchone()
    print(res)
    returnData = {
        'isValid': False
    }
    if (res[0] == 1):
        returnData['isValid'] = True

    response.content_type = 'application/json'
    return json.dumps(returnData)

#application = default_app()
print(checkForValidUsername('john'))


import json
#import pyodbc
import pymssql
from bottle import default_app, route, response

serverCredentials = {
    'server': "sql11.ezhostingserver.com",
    'database': "HadA_Main",
    'username': "admin-main",
    'password': "passtheword-1"
}

returnData = []
#connection = pyodbc.connect('DRIVER={ODBC Driver 13 for SQL Server};SERVER=' + serverCredentials['server'] + ';DATABASE=' + serverCredentials['database'] + ';UID=' + serverCredentials['username'] + ';PWD=' + serverCredentials['password'])
#connection = pyodbc.connect('DRIVER={ODBC Driver 13 for SQL Server};SERVER=sql11.exhostingserver.com;DATABASE=HadA_Main;UID=admin-main;PWD=passtheword-1')


#cursor.execute("SELECT name, password FROM Users WHERE name='bill'")
#rows = cursor.fetchall()
#for row in rows:
#    returnData.append(row)
#print(returnData)

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
    #if (res[0] == 1):
    #    returnData['isValid'] = True

    response.content_type = 'application/json'
    return json.dumps(returnData)

#
# FEED
#

@route('/get/feedItems/<currentIndex>/<numRequestedItems>/<filters>')
def getFeedItems(currentIndex, numRequestedItems, filters):
    # currentIndex: integer 0 -> inf, API should verify isn't past bounds of posts in existance
    # numRequestedItems: integer 1 -> inf 
    # filters: string, CSV for filters. user should be USER$:$username, category should be CATEGORY$:$categoryname
    # should return next X numebr of posts adhering to the user specifications

@route('/get/trendingItems/')
def getTrendingItems():
    # should grab some recently popular categories, terms, and users from the db and return an array of trendItem objects
#
# AUTHENTICATION
#

@route('/get/auth/verifyUser/<username>')
def getUserAuthentication(username):
    # username: String
    # should verify user is a valid user. Return true/false

@route('/get/auth/authenticateUser/<username>/<password>')
def getUserAuthentication(username, password):
    # username: String
    # password: String
    # should verify user credentals and authenticate them, returning true/false authenticated

@route('/post/auth/createUser/<username>/<password>')
def createNewUser(username, password):
    # username: String
    # password: String
    # should insert user into user DB and return void. Request service should then call getUserAuthentication with the new credentials.

#
# ACTIONS
#

@route('/post/action/publishPost/<username>/<postCategory>/<postContent>')
def publishNewPost(username, postCategory, postContent):
    # username: String, valid to user or userID??
    # postCategory: String, valid post Cateogry (should be defined somewhere publicly) (perhaps in a table)
    # postContent: String, perhaps character limited and Web-Safe

application = default_app()
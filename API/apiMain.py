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

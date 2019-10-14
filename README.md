# Description
My Implementation of Free Code Camp API Project: Exercise tracker

# Running local

## .env file
create .env file in project root directory.
In .env file specify port number. For example:
```
APP_PORT=3040
DB_NAME=exercises
DB_SERVER_ADDR=127.0.0.1
DB_PORT=27017
```
## installing project
```
npm i
npm start
```
Application requires MongoDB server access to persist and load data. 

## Starting mongo server - Windows
mongod.exe --dbpath=../data

# Example Usage
## Web UI
Application Interface is hosted on port $APP_PORT 
## Rest API

```
POST /api/exercise/add
With Parameters
userId: ff75d350-ee5a-11e9-8df8-dbc015d441c0
description: coding
duration: 1
date: 2019-10-14
```
```
GET /api/exercise/log
parameters:
userId
from
to
limit
```
```
POST /api/exercise/users
with parameters:
username
```
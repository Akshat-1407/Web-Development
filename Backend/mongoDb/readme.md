mongosh -> used to enter the mongo shell.

use database_name  -> it is used to create and use the database. If it is already created then use only.

show dbs -> shows the list of database in the system.

db -> used to see the database we are currently using.

# BSON Data: Binary JSON

## Document : Mongo Stores data in form of documents (BSON docs)
## Collection : MongoDB stores documents in collections.

 Database -> group of collection -> many documents(BSON data) -> key-value pairs

 analogy with sql -:

 table -> collections
 row -> document



show collections -> used to see all the collections in the database


## Command used to insert a document in a collection: 
db.collection_name.insertOne( {key: value} )   --> returns an unique id

db.collection_name.find() --> **Used to see all documents in collection.**


## There is no concept of SCHEMA in mongoDB.

## Command used to insert many documents in a collection: 
db.collection_name.insertMany( [ {key: value}, {key: value} {... } ] )
# MongoDB :

### BSON Data: Binary JSON
MongoDb processes BSON data.
___


## Structure of MongoDB : 

* **Document** : Mongo Stores data in form of documents (BSON docs)
* **Collection** : MongoDB stores documents in collections.

> Database is a group of collection.
  A collection consists of many documents (BSON data).
  A document can have many key-value pairs just like json or js object.

>**Analogy with SQL** -
 **table** - collections
 **row** - document
 database -> collections -> documents -> key: value pairs

 > **NOTE :**  There is no concept of `SCHEMA` in mongoDB.
 ___



 ## MongoDB Commands :

* **mongosh** - used to `enter` the mongo shell.

* **use database_name**  - it is used to `create` and `use` the database. If it is already created then use only.

* **db** - used to `see` the database we are `currently using`.

* **show dbs** - shows the `list of database` in the system.

* **show collections** - used to `see all the collections` in the database

* **db.createCollection("collection_name")** - used to create a empty collection.



#### Command used to insert a document in a collection: 

**db.collection_name.insertOne( {key: value} )** 
* Returns an unique id
* It also creates a collection if not exists.



#### Command used to insert many documents in a collection: 
**db.collection_name.insertMany( [ {key: value}, {key: value} {... } ] )**
db.collection_name.insertMany(array of documents)



#### Commands to find documents in a collection: 

* **db.collection_name.find()** - Used to see all documents in collection.

* **db.collection_name.find( { key1: value1, key1: value1, ... } )** - It returns a cursor (which is the reference to the original document in the collection) (It returs an array of object)

* **db.collection_name.findOne( { key: value } )** - It returns the actual documents in collection. Returns only an object.
___




### Query Selectors

##### Comparison Query Selectors

| Name   | Description                                                                 |
|--------|-----------------------------------------------------------------------------|
| `$eq`  | Matches values that are equal to a specified value.                         |
| `$gt`  | Matches values that are greater than a specified value.                     |
| `$gte` | Matches values that are greater than or equal to a specified value.         |
| `$in`  | Matches any of the values specified in an array.                            |
| `$lt`  | Matches values that are less than a specified value.                        |
| `$lte` | Matches values that are less than or equal to a specified value.            |
| `$ne`  | Matches all values that are not equal to a specified value.                 |
| `$nin` | Matches none of the values specified in an array.                           |

##### Logical Query Selectors

| Name   | Description                                                                                              |
|--------|----------------------------------------------------------------------------------------------------------|
| `$and` | Joins query clauses with a logical AND; returns all documents that match the conditions of both clauses. |
| `$not` | Inverts the effect of a query predicate; returns documents that do not match the query predicate.        |
| `$nor` | Joins query clauses with a logical NOR; returns all documents that fail to match both clauses.           |
| `$or`  | Joins query clauses with a logical OR; returns all documents that match the conditions of either clause. |

##### Examples: 

* Find students where marks > 75
    * db.student.find( { marks: {$gt: 75}} )

* Find students who live in delhi or mumbai
    * db.student.find( { city: {$in: ["delhi", "mumbai"]}} )

* Find students who scored > 75 or live in delhi
    * db.student.find( {\$or: [ {marks: {$gt: 75}}, {city: "delhi"} ] } )

* Find students who scored > 75 and live in delhi
    * db.student.find( {\$and: [ {marks: {$gt: 75}}, {city: "delhi"} ] } )

___


### Update Methods
MongoDB provides the following methods for updating documents in a collection:

* **db.collection.updateOne(filter, update, option)**
    Updates at most a single document that match a specified filter even though multiple documents may match the specified filter.
    ***example :*** db.student.updateOne( {name: "adam"}, {$set: {marks: 99}} )

* **db.collection.updateMany(filter, update, option)**
    Update all documents that match a specified filter.
    ***example :*** db.student.updateMany( {city: "Delhi"}, {$set: {city: "New Delhi"}} )

* **db.collection.replaceOne(filter, replacementDocument)**
    Replaces at most a single document that match a specified filter even though multiple documents may match the specified filter.
    ***example :*** db.student.replaceOne( {name: "bob"}, {name: "harry", marks: 45, city: "Mumbai"} )

 >**\$set :**  Adds new fields to documents. `$set` outputs documents that contain all existing fields from the input documents and newly added fields.
**{ $set: {  \<newField>: \<expression>, ... } }**

___

### Delete in Database : 

* **db.collection.deleteOne(\<filter>) :** Used to delete one document.
    * db.student.deleteOne( {marks: {\$lt: 75}})

* **db.collection.deleteMany(\<filter>) :** Used to delete many document.

* **db.collection.deleteMany( {} ) :** Used to delete all documents in a collection.

* **db.collection_name.drop() :** Used to delete an entire collection.

* **db.dropDatabase() :** : Used to delete the entire databse

___

### Nesting in database: 

```javascript
db.products.insertOne({
  _id: 1,
  name: "Laptop",
  price: 1200,
  details: {
    brand: "BrandName",
    specs: {
      processor: "Intel i7",
      ram: "16GB"
    }
  }
});
```


**Query the Document with find():**

* **Find all documents :** db.products.find({});

* **Find based on a nested field :** db.products.find({ "details.brand": "BrandName" });

* **Find based on deeper nested fields :** db.products.find({ "details.specs.ram": "16GB" });
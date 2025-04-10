# Mongoose : 
* It is a library that `creates a connection` between MongoDB and NodeJs JavaScript runtime environment.
* It is an `ODM (Object Data Modelling)` library.

### mongoose.connect ()
* The `mongoose.connect()` method is used in `Node.js` to `establish a connection` to a MongoDB database when working with the Mongoose library.

* It is an aynchronous function and returns a promise.

```javascript
// Startup code to connect node server with mongodb
const mongoose = require('mongoose');

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err)
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
```
___

## Schema :
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
```
The permitted SchemaTypes are:

* String
* Number
* Date
* Double
* Boolean
* ObjectId
* Array
* Decimal128
* Map
* UUID
* Int32
* Buffer
* Mixed
___

## Model :
* Model in mongoose is a class with which we construct documents.

* Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.

```javascript
const User = mongoose.model("User", userSchema)
  //    |              //      |
  // Model Name        // Collection Name 
```
In MongoDB a collection named `users` is formed having a schema of userSchema.
Note that the collection formed is in lowercase and plural which is done automatically by MongoDB.


User model is a class which represents a collection.
and the objects in the user class represents a document

___

## Insert data using mongoose :

```javascript
// Insert One
const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.in",
    age: 45,
});

user1.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

Here .save() method returns a promise. It is used to save the document created into the database(collection).

If we do nt use .save() method the document is created but not saved in the collection.

```javascript
// Insert Many
User.insertMany([
  {name: "Steve", email: "steve@gamil.com", age: 48},
  {name: "Bruce", email: "bruce@gamil.com", age: 53},
  {name: "Peter", email: "peter@gamil.com", age: 28},
]).then((res) => {
    console.log(res);
});
```
> **NOTE :** Mongoose uses `Operation Buffering`.
Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.

___

## Find in Mongoose :

**Model.find() :**  It does not return a promise. It returs a query object but we can apply .then() and .catch() methods on it.

```javascript
// Used to show all documents
User.find( {} )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })

// Used to show filtered documents
User.find( { age: { $gt: 47 } } )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })

// Used to display the first document that matches the filter. Returns a single result
User.findOne( {age: {$gt: 47}} )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })

// Find a document using its _id.
User.findById('67f272d3c0ef4f6134a37fdc')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })

```
___

## Update in mongoose :

```javascript
// Model.updateOne(filter, updatedValue).then()
User.updateOne({name: "Peter"}, {age: 17}).then(res => console.log(res));
User.updateMany({age: {$gt: 40}}, {age: 40}).then(res => console.log(res));
```
***Both methods returns a query object***
***It doesn't return the document which we found.***
___

## Find and Update :

### Model.findOneAndUpdate() :
* It is used to find a single document in a MongoDB collection that matches a given filter and then update it in one atomic operation.
* It returs a query object.

_Syntax_
```javascript
Model.findOneAndUpdate(filter, update, options);
```
#### Parameters
**filter :** Specifies the query criteria to find the document (e.g., { name: 'John' }).

**update :** Defines the update operations to apply (e.g., $set, $inc, etc.).

**options (optional) :** Customize the behavior of the method.

***Common Options***
* **new (default false)**: If true, returns the updated document instead of the original.

**Example :** 
```javascript
User.findOneAndUpdate({name: "Peter"}, {age: 19}, {new: true})
  .then((res) => {
    console.log(res);
  }) 
```

### Model.findByIdAndUpdate() :
* This method finds a document by its _id field and updates it in a single atomic operation.
* It also returns a query object.

Syntax
```javascript
Model.findByIdAndUpdate(id, update, options);
```

#### Parameters
**id :** The _id of the document you want to update.

**update :** Specifies the changes using update operators like $set, $inc, etc.

**options (optional) :** Customize the behavior of the update operation.

***Common Options***
* **new (default false) :** Returns the updated document instead of the original.

**Example :** 
```javascript
User.findByIdAndUpdate('67f272d3c0ef4f6134a37fdc', {age: 21}, {new: true})
  .then((res) => {
    console.log(res);
  }) 
```
___

## Delete in Mongoose :

**Model.deleteOne()** -> returns deleted count
**Model.deleteMany()** -> returs deleted count
**Model.findByIdAndDelete()** -> returs the deleted document
**Model.findOneAndDelete()** -> returs the deleted document

### Model.deleteOne() :
* Deletes `the first document` that matches conditions from the collection. 
* It returns an object with the property deletedCount indicating how many documents were deleted.
* It returns a query object.

```javascript
User.deleteOne({ name: 'Peter' }).then((res) => {
  console.log(res);
}); 
// returns {deletedCount: 1}
```

### Model.deleteMany() :
* Deletes `all of the documents` that match conditions from the collection. 
* It returns an object with the property deletedCount containing the number of documents deleted.
* It returns a query object.

```javascript
User.deleteMany({ age: {$gt: 30} }).then((res) => {
  console.log(res);
}); 
// returns {deletedCount: x} where x is the number of documents deleted.
```

### Model.findOneAndDelete() : 
* Finds a matching document, removes it, and returns the found document (if any).
* It returns a query object.

**Syntax :**
Model.findOneAndDelete(conditions, options)

```javascript
User.findOneAndDelete({ name: 'John' });
```

### Mode.findByIdAndDelete() : 
* Model.findByIdAndDelete() is another useful Mongoose method for deleting documents. It specifically targets a document based on its unique _id.
* It returns a query object.

**Syntax :**
Model.findByIdAndDelete(_id);

```javascript
User.findByIdAndDelete('603d6c4e8e1f4e5a441e37c1');
```
___

## Schema Validations: 
Schema validations in Mongoose are powerful features that ensure the data stored in your MongoDB database meets specific requirements. They allow you to define rules and constraints for each field in your schema.

```javascript
// Schema Validations
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price is too low"], // Custom error
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["friction", "non-friction"]
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);
  
let book1 = new Book({
  title: "48 Laws of Power",
  author: "Robert Greene",
  price: 299,
  category: "friction",
  genre: ["comedy", "action", "fantasy"],
});

book1.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
```
### List of Validators: 
* **type :** Specifies the data type of the field (e.g., String, Number, Boolean, Date, Array, Object).

* **required :** Ensures the field is mandatory (required: true).

* **default :** Sets a default value if the field is not provided (default: 'value').

* **unique :** Ensures the value is unique across all documents (unique: true).

* **enum :** Array, creates a validator that checks if the value is in the given array.(enum: ['value1', 'value2']).

* **min :** Sets the minimum value for Number fields (min: value).

* **max :** Sets the maximum value for Number fields (max: value).

* **minlength :** Specifies the minimum length for String fields (minlength: value).

* **maxlength :** Specifies the maximum length for String fields (maxlength: value).

* **match :** Validates the String field against a regular expression (match: /regex/).

* **validate :** Allows for custom validation logic using a function or validator (validate: { validator: func, message: 'Error message' }).

* **immutable :** Makes the field read-only after the document is created (immutable: true).

* **get :** Defines a custom getter function to modify the field’s value when accessed (get: func).

* **set :** Defines a custom setter function to modify the field’s value when saved (set: func).

* **trim :** Removes whitespace from String fields (trim: true).

* **lowercase :** Converts the String field to lowercase (lowercase: true).

* **uppercase :** Converts the String field to uppercase (uppercase: true).

* **select :** Excludes or includes the field by default in query results (select: false to exclude).

> ***Note :*** 
The rules that we defined during the validation only works at the time of insertion of data. It does not work at the time of updation of date.
During the time of updation we use an option in the update fuction that is :-
**{runValidators: true}** : if true, runs update validators on this command. Update validators validate the update operation against the model's schema
```javascript
Book.findByIdAndUpdate("650a451d558r412g451f", 
                      { price: -100 }, 
                      { runValidators: true });
```

### Custom error during validations: 
We can also give custom error messages by: 
```javascript
price: {
  type: Number,
  min: [1, "Price is too low"], // Custom error
}
```
To print this custom err we console.log this expression in .catch() block :-
```javascript
.catch((err) => {
  console.log(err.errors.price.properties.message);
});
// here price is the key whose validator is not followed.
```
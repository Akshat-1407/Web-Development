# MySql Database

## There are four was to use our database -

* Using MySql Workbench.
* Using MySql2 Package.
* Using Command Line interface.
* Using `schema.sql` file.
___

## Using `Command Line` interface :

To enter the command line interface we use the following command: 
```bash
    mysql -u root -p
```
To exit the command line interface we use the following commands:
```bash
    exit
    quit
```
___

## Using `Schema.sql` file :

* First create a `schema.sql` file in the root directory.
* Write the `SQL commands` in this file.
* Open the Command line interface.
* `USE the database` in which you have to execute the command written in schema.sql.
* Now write **`source schema.sql`** to execute the command.
___

## Using MySql Package: 
   
```javascript
    const mysql = require('mysql2');

    // Create the connection to database
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test', // here comes the name of the database we are using

    // Ending a database connection
    connection.end();
});
```


```javascript
    // A simple SELECT query
    let query = 'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
    connection.query(query, (err, results, fields) => {
        console.log(results); // results contains rows returned by server. It is an array of object.
        console.log(fields); // fields contains extra meta data about results, if available
    }
    );
```

## Query Using placeholders :
 We pass an array in the connection.query which contains the values of those placeholders.

```javascript
    let query = 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?'
    connection.query(query, ['Page', 45], (err, results) => {
        console.log(results);
    });
```

```javascript
    let query = "INSERT INTO user (id, username, email, password) VALUES ?";

    let user = [["a1b2", "Steve", "steve@gmail.com", "shes5452"], 
                ["c3d4", "Bob", "bob@gmail.com", "bb845ob"], 
                ["e5f6", "Alice", "alice@gmail.com", "alis52"]];

    connection.query(query, [user], (err, result) => {
        try {
            if (err) throw err;
            console.log(result); // result is an array of objects that contains the output of the query
        }
        catch(err) {
            console.log(err);
        }
    });
```

## Why Wrap in an Extra Array?

#### Placeholders (`?`) in MySQL:
The `?` placeholder in a query corresponds to a single value or a 1D array. However, when you use the `?` placeholder for bulk insertions like `VALUES ?`, MySQL expects a **2D array** where each inner array represents a row to be inserted into the database.

---

#### What Happens with `[data]`:

- **Without the extra brackets**: `data` is just a 2D array containing all the rows.
- **By wrapping it in square brackets** (`[data]`): You're making it a **3D array**, where the outermost array is required for MySQL to interpret the entire `data` structure as a single argument corresponding to the `?` placeholder in the query.

---

#### Essentially:
- `data` is the **2D array** representing rows of values.
- `[data]` tells the query: *"Here is one argument for the `?` placeholder, and it contains all the rows you need."*

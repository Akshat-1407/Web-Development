## Node.js :
   * It is a javascript runtime environment.
   * It is used for server side programming.
   * It is not a language, library or framework.
   * It is a alternative place where we can run our javascript code instead of running it on browser.
___

## Process

### process : 
   This **object** provides information about, and control over, the current Node.js process.

### process.argv :
   returns an array containing the command line arguments passed when the Node.js process was launched.

   * The first index of the array contains the executable path for node
   * The second index of the array contains the path of the file which we are running.
___

## Export from file

   require() -> a built in function to include external modules that exist in separate files

   module.exports -> a special object.
   By default it is an empty object but we can change its datatype to any other. eg:
   module.exports = "Hello"
___

## Export from directory

   In the directory from which we need to export the data we make a new special file named **index.js**.

   In this file we require() all the exports form all the files in that directory and then make an array of the return value of the require().

   Hence we obtain an array of objects. Now in the another directory in which we need to require() that directory we require the the array of objects we made.
___

## NPM 
   It stands for node package manager
___

## Installing packages using npm

   Go the the directory in which you want to install the package and then execute the following command in the terminal.

```bash
   npm install <package name>
```
   Now when the package will be install we will see some folders and json files.
   *  **node_modules** : 
      The node_molules folder contains every installed dependency for your project.

   *  **package_lock.json** :
      It records the exact version of every installed dependency, including its sub dependencies and their version.

   * **package.json** : 
      The package.json file contains descriptive and functional metadata about a project such as name, version and dependencies.
___
<!-- npm init : use to initialise you own package.json

npm install : use to install node_modules

sudo chown -R $USER/usr/local/lib/node_modules
npm install -g <-package name->
npm link <-package name-> -->

## import v/s require() :
   We can't selectively load only the pieces we need with require by using import, we can selectively load only the pieces we need, which can save memory.
   
   Loading is synchronous for 'require' but can be asynchronous for 'import'.

   **Syntax** :
   ```javascript
      import { sum } from "./math.js"
   ```
   > NOTE : While using import we need to add a property in the package.json file in the working directory.
   If there is no package.json use **npm init** to intialize one. The property is : - 
   **"type" : "module"**
___




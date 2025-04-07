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

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);


// // Insert One
// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 45,
// });
// user1.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// // Insert Many
// User.insertMany([
//   {name: "Steve", email: "steve@gamil.com", age: 48},
//   {name: "Bruce", email: "bruce@gamil.com", age: 53},
//   {name: "Peter", email: "peter@gamil.com", age: 28},
// ]).then((res) => {
//     console.log(res);
// });


// // Used to show all documents
// User.find( {} )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// // Used to show filtered documents
// User.find( { age: { $gt: 47 } } )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// // Used to display the first document that matches the filter. Returns a single result
// User.findOne( {age: {$gt: 47}} )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// // Find a document using its _id.
// User.findById('67f272d3c0ef4f6134a37fdc')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })


// User.updateOne({name: "Peter"}, {age: 17}).then(res => console.log(res));

// User.findOneAndUpdate({name: "Peter"}, {age: 19}, {new: true})
//   .then((res) => {
//     console.log(res);
//   }) 

// User.findByIdAndUpdate('67f272d3c0ef4f6134a37fdc', {age: 21}, {new: true})
//   .then((res) => {
//     console.log(res);
//   }) 
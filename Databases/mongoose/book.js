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
    })
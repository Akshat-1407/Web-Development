const mongoose = require("mongoose");

main()
    .then(() => console.log("Connected to database..."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/databaseRel');
}

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUser = async() => {
    let user1 = new User({
        username: "sherlockholmes",
        addresses: [{
            location: "221B Baker Street",
            city: "London",
            
        }],
    });
    user1.addresses.push({location: "P32 Wall Street", city: "London"});

    result = await user1.save();
    console.log(result);
};

addUser();

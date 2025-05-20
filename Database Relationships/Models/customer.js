const mongoose = require("mongoose");

main()
    .then(() => console.log("Connected to database..."))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/databaseRel');
}

const orderSchema = new mongoose.Schema({
    item: String,
    price: Number,
});

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            rel: "Order",
        },
    ],
});


const Customer = mongoose.model("Customer", customerSchema);
const Order = mongoose.model("Order", orderSchema);


const addCustomer = async () => {
    let cust1 = new Customer({
        name: "Rahul Kumar",
    });

    let order1 = await Order.findOne({ item: "Chips" });
    let order2 = await Order.findOne({ item: "Chocolate" });

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
};

addCustomer();


// const addOrders = async () => {
//     let result = await Order.insertMany([
//         {item: "Samosa", price: 15},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 50}
//     ])
//     console.log(result);
// };

// addOrders();

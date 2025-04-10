const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, "public"))); //used to send additional css and js files
app.use(express.urlencoded({ extended: true })); // used to handle URL encoded data. When getting data from form.
app.use(express.json());


main()
  .then(res => console.log("Connection Sucessful..."))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};


// Index Route
app.get("/chats", async (req, res) => {
  let allChats = await Chat.find({});
  res.render("index.ejs", { allChats })
});


// New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});


// Create Route
app.post("/chats", (req, res) => {
  let {from, msg, to} = req.body;

  let newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date()
  });
  newChat.save().then(res => console.log("Chat was saved")).catch(err => console.log(err));

  res.redirect("/chats");
});


// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});


// Update Route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { newMsg } = req.body; 
  let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
  res.redirect("/chats");
});


// Destroy Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});


app.get("/", (req, res) => {
    res.send("Server is working...")
});

app.listen(port, () => {
    console.log(`You are listening to port ${port}...`);
});
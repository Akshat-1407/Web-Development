const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(res => console.log("Connection Sucessful..."))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [
    {
        from: "Anjali",
        to: "Ritesh",
        msg: "Let's discuss the project tomorrow.",
        created_at: new Date()
    },
    {
        from: "Aman",
        to: "Priya",
        msg: "Can you review my presentation?",
        created_at: new Date()
    },
    {
        from: "Sanya",
        to: "Kunal",
        msg: "Are you attending the workshop?",
        created_at: new Date()
    },
    {
        from: "Neha",
        to: "Arjun",
        msg: "Please send me the event schedule.",
        created_at: new Date()
    },
    {
        from: "Vivek",
        to: "Megha",
        msg: "When are we meeting for coffee?",
        created_at: new Date()
    },
    {
        from: "Kabir",
        to: "Simran",
        msg: "Did you complete the assignment?",
        created_at: new Date()
    }
]


Chat.insertMany(allChats);
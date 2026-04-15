const mongoose = require("mongoose");

const schemaRules = {
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email should be unique"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [6, "password should be atleast of 6 length"],
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 6,
        // custom validation
        validate: [function () {
            return this.password == this.confirmPassword;
        }, "password should be equal to confirm password"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        // these are the only possible values for the role
        enum: ["user", "admin", "feed curator", "moderator"],
        default: "user"
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    },

}

const userSchema = new mongoose.Schema(schemaRules);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

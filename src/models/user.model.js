import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required!"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "password is required!"]
    },

    isMfaActive: {
        type: Boolean,
        required: false,
    },
    
    twoFactorSecret:{
        type: String,
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)
export default User
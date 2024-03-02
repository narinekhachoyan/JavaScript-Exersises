import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    paymenInfo:{
        type: String,
        required: true
    },
    orderHistory:{
        type:String
    },
    wishList:{
        type: String
    },
    cart:{
        type: String
    },
    status:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    preferences:{
        type: String
    },
    lastLogin:{
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', userSchema);
export { User };
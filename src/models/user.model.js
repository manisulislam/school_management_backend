import mongoose, {Schema} from "mongoose"

const userSchema= new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        required: true
    },
    covarImage:{
        type: String
    },
    password:{
        type: String,
        required: true
    },
    phoneNumber: { 
        type: String, 
        required: true 
    },
    refreshToken:{
        type: String
    },
    dateOfBirth: { 
        type: Date, 
        required: true 
    },
    gender: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    role:{
        type: String,
        enum: ["Student", "Teacher","Admin","Parent"],
        required: true
    }
  
},{timestamps: true})

export const User= mongoose.model("User", userSchema )
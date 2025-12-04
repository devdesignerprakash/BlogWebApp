import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true,    
        trim:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true,

    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        required:true,
        default:'user'
    },
    bio:{
        type:String,
        trim:true
    },
    profilePicture:{
        type:String,
        trim:true
    },

    password:{
        type:String,
        required:true,
        trim:true
    }
})
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
})
const User = mongoose.model('User',userSchema);
export default User;
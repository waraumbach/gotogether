

import mongoose, {Schema} from 'mongoose'



const userSchema = new Schema({
    name : String,
    age : Number,
    email : {
        unique : true,
        required : true,
        type : String
    },
    password : String,
    image : String
})
 

const User = mongoose.model('User', userSchema)

export default User
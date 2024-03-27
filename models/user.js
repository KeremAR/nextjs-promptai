import {Schema,  model, models} from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique:[true, 'Email already exists!'],
        required:[true,'Email is required']
    },
    username : {
        type: String,
        required:[true,'Email is required'],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid']

    },
    image:{
        type: String
    }
})
const User = models.User || model("User", UserSchema)
 
export default User;
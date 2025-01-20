import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://lh3.googleusercontent.com/a/ACg8ocJQPgoJHzuYubp3gpYcUHS_SPEAEuVvReAEGPrJah5SbZhdpmnL=s288-c-no"
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
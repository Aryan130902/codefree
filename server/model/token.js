import mongoose from 'mongoose';

const TokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    }
});


export const Token = new mongoose.model('token', TokenSchema);

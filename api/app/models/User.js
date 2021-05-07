const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        password: { 
            type: String, 
            select: false,
            required: true,
        },
        email: {
            type: String,
            index: true,
            unique: true,
            required: true, 
        },
    },
    { 
        timestamps: true
    }
);

userSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

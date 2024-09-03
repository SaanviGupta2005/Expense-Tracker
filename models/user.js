const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expense-tracker')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
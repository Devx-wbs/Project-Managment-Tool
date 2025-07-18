const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    companyName: { type: String, required: true, unique: true },
    companyDomain: { type: String, required: true, unique: true },
    companyID: { type: String, required: true, unique: true },
    companyAddress: { type: String, required: true },
    founded_year : {type:Number},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'owner' },
    token: { type: String }
});

module.exports = mongoose.model('User', userSchema);

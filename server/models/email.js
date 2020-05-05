const mongoose = require('mongoose');

const emailScheam = new mongoose.Schema({
    email: String,
    name: String,
},{versionKey: false})

module.exports = mongoose.model('Email', emailScheam);
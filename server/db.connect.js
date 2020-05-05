const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URL;

const dbConnect = () => {
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to mongoDB')
    });
};

module.exports = dbConnect;
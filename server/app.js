if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = 3900;
const cors = require('cors');

//db.connect
require('./db.connect')();

//app.use
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//MainRouter;
app.use(require('./routes'))

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
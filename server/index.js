const express = require("express");
const cors = require('cors');
const app = express();
const router = require('./routes');

app.use(cors());
app.use('/', router);

app.listen(3001, () => {
    console.log("Server run")
})
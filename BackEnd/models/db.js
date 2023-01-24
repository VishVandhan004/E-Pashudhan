// -----------------mongoDB database connection-----------------
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error(`Error connecting to the database. >> ${err}`));

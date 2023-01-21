const express = require('express');
require('dotenv').config();
const app = express();
const port = 3000;

// DB connection
require('./models/db');

const userRouter = require('./routes/userRoutes');

// Middleware Function
// Method 1 - gets some data from a request, formats into json and adds it into the request body
// app.use((req, res, next) => {
//     req.on('data', (chunk) => {
//         const data = JSON.parse(chunk);
//         req.body = data;

//         next();
//     });
// });

// Method 2
app.use(express.json());     // does the same thing as the previous middleware function, but it's built-in

app.use(userRouter);

// Displaying html file
app.get('/', (req, res) => {
    res.send('<h1 style="color: green;">Hello, World!</h1>');
});

// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));

const express = require('express');
const app = express();
const ejs = require('ejs');
const userRoutes = require("./routes/user.js") //to capture the file in the routes folder.
require('dotenv').config();
PORT = process.env.PORT || 8000;

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//using express routers to organize routes
app.use(userRoutes);

//serves static files in public folder
app.use(express.static('public'));

//start the server
app.listen(PORT, () => {
    console.log(`Connected at port ${PORT}`);
});

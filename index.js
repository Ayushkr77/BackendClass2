// Watch video2 Babbar starting

const express=require("express");
const app=express();

// load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;  // if port ni aaya then it'll run on port 4000

// Middleware to parse json request body
app.use(express.json());


// import routes for TODO API
const todoRoutes=require("./routes/todos");

// mount the todo api routes
app.use("/api/v1",todoRoutes);


// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// connect to the database
const dbConnect=require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
    res.send("<h1>This is the homepage</h1>");
})
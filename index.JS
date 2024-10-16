const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const UserRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Test route
app.use("/api/users", UserRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);


app.listen(8800,()=>{
    console.log("Backend Server is running");
})

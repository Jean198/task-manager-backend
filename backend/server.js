const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json()); //This is enough when sending data only as json
app.use(express.urlencoded({ extended: false })); //When sending data as Form-data in postman
app.use(cors(
  {
origin:["http://localhost:3000", "https://task-manager-frontend.onrender.com"]
}
));
app.use("/api/tasks", taskRoutes);


//Mongoose connection and starting server
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(error);
  });

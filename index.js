require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const categoryRoutes = require("./routes/category");
const postRoutes = require("./routes/post");





//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  }).catch((err)=>{console.log("Opps")});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api/blog", contactRoutes);
app.use("/api/blog", authRoutes);
app.use("/api/blog", categoryRoutes);
app.use("/api/blog", postRoutes);





//PORT
const port = process.env.PORT || 8000;



//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});

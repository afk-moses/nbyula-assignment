const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const port = 8000;
const router = express.Router();

//Middlewares
app.use(cors());
app.use("/",router);

router.get("/",(req,res)=>{
    res.send("hello world!!");
});



app.listen(port, () => {
    console.log("server is running on",port);
});

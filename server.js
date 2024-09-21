const express = require('express');
const dbConfig = require("./config/dbConfig")
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const portfolioRoute = require("./routes/portfolioRoute.js")


const app = express();


app.use(cors());

app.use(express.json());

mongoose.connect(process.env.mongo_url)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.use("/api/portfolio", portfolioRoute);


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server start on port ${port}`);
    
});
const express = require("express");

const app = express();


app.listen(process.env.port, (req, res)=>{
    console.log(`Server is running at http://localhost:${process.env.port}`);
});
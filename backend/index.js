const fs = require("fs");
const express = require("express");
const app = express();
require("dotenv").config();

app.get("/about", (req,res)=>fs.readFile("./todos.json","utf-8",(err,data)=>{
    if(err) throw err;
    const todos = JSON.parse(data);
    return res.json({todos:todos});
}))



app.listen(process.env.PORT, () => 
console.log("The server is connected at port 8000")
)
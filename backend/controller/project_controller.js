const express =  require("express");
const project = express.Router();

project.get("/", (req,res)=>res.send("This is a controller"));
project.listen(8000, ()=> console.log("This server is connected on port 8000"))
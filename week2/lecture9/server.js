const express = require('express')
const app = express();
const PORT = 4000;
app.get("/",(req,res)=>{
    res.send("Home page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})

app.listen(PORT,()=>{console.log("server is running on port",PORT);})
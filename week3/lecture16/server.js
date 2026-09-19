const express = require('express')
const morgan = require("morgan")
const app = express()

const PORT = 3000

// const logmiddleware=(req,res,next)=>{
//     console.log("Request method:",req.method);
//     console.log("Request URL:",req.url);
//     console.log("Date",new Date().toLocaleString());
//     next()  //agr ye nhi likhoge toh req chlti rhegi kyuki middleware ne aage bheja hi nhi
// }

app.use(morgan("dev"))
// app.use(morgan("tiny"))
// app.use(morgan("combined"))
const apicheck= (req,res,next)=>{
    if(req.query.API_KEY==="1234"){
        next()
    }else{
        res.status(401).send("Unauthorized:Invalid Api Key ")
    }
}

app.use(apicheck)
// app.use(logmiddleware)

app.get("/",(req,res)=>{
    console.log("hello from home");
    res.send("Hello from home")
})

app.get("/students",(req,res)=>{
    console.log("hello from student");
    res.send("Hello from student")
})

app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})
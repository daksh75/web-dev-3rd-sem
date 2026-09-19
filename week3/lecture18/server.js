const express = require("express")

const app = express()

const PORT = 4000

app.get("/",(req,res,next)=>{
    let age = 10
    try {
        if (age<=10){
            throw new Error ("Age is not valid")
        }
        else{
            res.send("Welcome to home page")
        }
    } catch (error) {
        next(error)
    }
})

app.use((req,res)=>{ //invalid route middleware
    res.status(404).send({
        success:false,
        message:"Page not found"
    })
}) //always write at the end off the file

app.use((error,req,res,next)=>{ //error handling middleware
    res.status(500).send({
        success:false,
        message:error.message
    })  //this is also always write at the end of the file
})

app.listen(PORT,()=>{
    console.log("Server is running on port",PORT);
    
})
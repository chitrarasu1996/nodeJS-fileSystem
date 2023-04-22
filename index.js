const express=require("express");
const fs=require("fs")

const http=require("http");

const router=require("./routes/route")
const cors=require("cors");

const app=express();



//midlleware use

app.use(express.json());
app.use(router);
app.use(cors());


const port=4000;

app.get("/",(req,res)=>{
    res.status(201).send({message:"node js file system task"})
});





app.listen(port,()=>{
  console.log("port is running", `${port}`)
});



const express = require("express");

const app = express();

const routerPath = require("./Router/router")
const dotenv = require("dotenv")
dotenv.config();
const mongo = require("./connect");
const cors=require("cors");

app.use(express.json());

mongo.connect();
app.use(cors());




app.use("/", (req, res, next) => {
   var auth={
    authrised:true
   };
   if(auth.authrised){
    next();
   }else{
    res.send({msg:"Not Authorised"})
   }
    
});




app.use("/user", routerPath);




const PORT = process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log("app is running")
})
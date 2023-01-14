const express=require("express");

const router = express.Router();
 
const Data = require("../modules/modules")


router.post("/signup",Data.signup);



router.post("/signin",Data.signin)




module.exports=router;
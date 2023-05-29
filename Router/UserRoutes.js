const express=require('express');
const {Signup,signin} =require('../controller/userCon')

const router=express.Router();

router.post('/signup',Signup);
router.post("/login", signin);


module.exports=router;

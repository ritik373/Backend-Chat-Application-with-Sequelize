const express = require("express");

const router = express.Router();

const {authenticate}=require('../middleware/auth');
const {postGroup,getGroup}=require('../controller/GroupCon')


router.post ( "/create-group",authenticate,postGroup)
router.get( "/get-groups",authenticate,getGroup)


module.exports=router;
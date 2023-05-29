const express =require('express')
const {authenticate}=require('../middleware/auth');

const {postMessage,getMessage,deleteMessage}=require('../controller/messageCon');

const router=express.Router();

router.post('/send-message',authenticate,postMessage)
router.get('/get-messages/:groupId',authenticate,getMessage)
router.delete("/deleteMessage/:id",authenticate,deleteMessage)

module.exports=router;
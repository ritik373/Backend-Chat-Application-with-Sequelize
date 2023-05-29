const express = require("express");

const router = express.Router();
const  { authenticate } = require('../middleware/auth');
const { addMember,getGroups ,deleteGroup} = require("../controller/GroupsParti");


router.post('/addMember', authenticate, addMember);

router.get("/getMember/:groupId", authenticate, getGroups);
router.delete("/delete/:id", authenticate, deleteGroup);


module.exports = router;

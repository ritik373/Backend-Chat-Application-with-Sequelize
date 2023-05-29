const Message=require('../Models/MessageModel')


exports.postMessage=async(req,res)=>{
    // console.log(req.body)
    try {
        const { name, message, groupId } = req.body;
        let UserId = req.user.id;
        // let groupI
        // console.log("user...."+name,message,groupId)
        await Message.create({
          name: name,
          message: message,
          userId: UserId,
          groupId:groupId
        });
        console.log("kevqwudqh")
        return res.status(201).json({ message: "message sent successfully" });
      } catch (err) {
        res.status(500).json({ err: "Something went wrong" });
      }
    };
    exports.getMessage = async (req, res, next) => {
        const groupId = req.params.groupId;
        // console.log(groupId+"dgyuqgdyuqge ")
        try {
          const messages = await Message.findAll({ where: {  groupId: groupId } });
          res.status(200).json(messages);
        } catch (err) {
          console.log(err);
          res.status(500).json({ error: "SOMETHING WENT WRONG" });
        }
      };

      exports.deleteMessage = async (req, res, next) => {
        let id = req.params.id;
        console.log("delete messageds ............."+id);
        try {
          const group = await Message.destroy({ where: { id: id } });
          console.log(group);
          res.status(200).send({ group });
        } catch (error) {
          console.log("error:", error);
        }
      };
      
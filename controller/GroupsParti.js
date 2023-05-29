const User=require('../Models/UserModel');
const GroupParti=require('../Models/GroupParti');


exports.addMember = async (req, res) => {
    // console.log(req.body);
    // console.log("user is..." + req.user.id);
    // res.status(400).json({mesg:"succeessfull"})
    try {
        // console.log("before Body Data")
        const { email, name, avatar, groupId } = req.body;
        if (!email) {
            // console.log("insdiee .....")
          res.status(400).json({ message: "Email Not Found" });
        }
        console.log("After Body Data"+email,groupId,name)
        const userFound = await User.findOne({ where: { email: email } });
        if (!userFound) {
          return res.status(400).json({ message: "Email Not Found" });
        }
        // console.log(" find data..."+userFound)

      const member= await GroupParti.create({
          email: email,
          name: name,
          avatar: avatar,
          groupId: groupId,
          userId: Number(userFound.id),
        });
        res.status(200).json({ member });
      } catch (error) {
        console.log("error:", error);
      }
}


exports.getGroups = async (req, res, next) => {
    let groupId = req.params.groupId;
    console.log(groupId)
    try {
      const groupsMember = await GroupParti.findAll({
        where: { groupId: groupId },
      });
      res.status(200).json({ groupsMember });
    } catch (error) {
      console.log("error:", error);
      res.status(400).json({ message: "Not Found" });
    }
  };

  exports.deleteGroup = async (req, res, next) => {
    const id = req.params.id;
    try {
      const group = await GroupParti.destroy({ where: { id: id } });
      console.log("group:", group);
    } catch (error) {
      console.log("error:", error);
    }
  };
  
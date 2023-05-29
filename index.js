const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./Utils/database');
const cors = require('cors');



const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());//...........calling the external request means call from api external folder............




//.........................Routes..................

const UserRouter = require('./Router/UserRoutes')
const MessageRouter = require('./Router/messageRoute');
const GroupRouter = require('./Router/GroupRoutes');
const GroupsPartiRouter = require('./Router/GroupsParti');

app.use('/user', UserRouter);
app.use('/message', MessageRouter);
app.use("/group", GroupRouter);
app.use("/groups", GroupsPartiRouter);


//....................................Relations..
const User = require('./Models/UserModel');
const Message = require('./Models/MessageModel');
const Group = require('./Models/GroupModel');
const GroupParti=require('./Models/GroupParti');


User.hasMany(Message);
Message.belongsTo(User);

Message.belongsTo(Group);
Group.hasMany(Message);


GroupParti.belongsTo(User);
GroupParti.belongsTo(Group);






sequelize
  .sync()
  .then(() => {
    app.listen(4000, (req, res) => {

      console.log("listenning on port 4000...");

    });
  })
  .catch((err) => {
    console.log("err", err);
  });

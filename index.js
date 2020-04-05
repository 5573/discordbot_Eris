const Eris = require("eris");
const time = require("./service/fDatetime")
const sequelize = require("./service/database")
const UserStatus = require("./models/UserStatus")
require('dotenv').config();
var bot = new Eris(process.env.TOKEN);

bot.on("ready", () => {
    console.log("Ready");
    sequelize.authenticate()
    .then(()       => { console.log('Success test connection');        })
    .catch((error) => { console.log('Failure test connection', error); });
});

bot.on("voiceChannelJoin", async (member, newChannel) => {
    bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + (member.nick ? member.nick : member.username) + " が " + newChannel.name + " に入室しました。");
    try {
      let newStatus = await UserStatus.create({
        user_id: member.id,
        name: member.username,
        guild_id: member.guild.id
      });
    } catch(ex) {
      console.log(ex);
    }
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
        bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + (member.nick ? member.nick : member.username)  + " が " + oldChannel.name + " から退出しました。");
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
        bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + (member.nick ? member.nick : member.username) + " が " + oldChannel.name + " から " + newChannel.name + " に移動しました。");
});


bot.connect();

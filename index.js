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
        guild_id: member.guild.id,
        io: 1
      });
    } catch(ex) {
      console.log(ex);
    }
});

bot.on("voiceChannelLeave", async (member, oldChannel) => {
        bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + (member.nick ? member.nick : member.username)  + " が " + oldChannel.name + " から退出しました。");
        try {
          let newStatus = await UserStatus.create({
            user_id: member.id,
            name: member.username,
            guild_id: member.guild.id,
            io: 0
          });
        } catch(ex) {
          console.log(ex);
        }
});

bot.on("voiceChannelSwitch", async (member, newChannel, oldChannel) => {
        bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + (member.nick ? member.nick : member.username) + " が " + oldChannel.name + " から " + newChannel.name + " に移動しました。");
        try {
          let newStatus = await UserStatus.create({
            user_id: member.id,
            name: member.username,
            guild_id: member.guild.id,
            io: 3
          });
        } catch(ex) {
          console.log(ex);
        }
});


// この機能はネタ

// bot.on("typingStart", (member, channel) => {
//   // console.log(channel.username);
//   // console.log(member.id);
//   bot.createMessage(member.id, channel.username + "さん が書き込み中だぞ！")
// })

bot.connect();

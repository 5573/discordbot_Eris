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

// bot.on("voiceChannelJoin", async (member, newChannel) => {
//   // if(newChannel.guild.id === )
//   console.log(newChannel.guild.id, newChannel.guild.name )
//   if(newChannel.guild.id === process.env.GUILD_ID) {
//     bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + (member.nick ? member.nick : member.username) + " が " + newChannel.name + " に入室しました。");
//     try {
//       let newStatus = await UserStatus.create({
//         user_id: member.id,
//         name: member.username,
//         guild_id: member.guild.id,
//         io: 1
//       });
//     } catch(ex) {
//       console.log(ex);
//     }
//   } else if(newChannel.guild.id === process.env.GUILD_ID2) {
//     bot.createMessage(process.env.CHANNEL2, time.formatTime() + " に " + (member.nick ? member.nick : member.username) + " が " + newChannel.name + " に入室しました。");
//   }
//
// });
//
// bot.on("voiceChannelLeave", async (member, oldChannel) => {
//   console.log(oldChannel.guild.id, oldChannel.guild.name )
//   if(oldChannel.guild.id === process.env.GUILD_ID) {
//     bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + (member.nick ? member.nick : member.username)  + " が " + oldChannel.name + " から退出しました。");
//     try {
//       let newStatus = await UserStatus.create({
//         user_id: member.id,
//         name: member.username,
//         guild_id: member.guild.id,
//         io: 0
//       });
//     } catch(ex) {
//       console.log(ex);
//     }
//   } else if(oldChannel.guild.id === process.env.GUILD_ID2) {
//     bot.createMessage(process.env.CHANNEL2, time.formatTime() + " に " + (member.nick ? member.nick : member.username)  + " が " + oldChannel.name + " から退出しました。");
//   }
// });
//
// bot.on("voiceChannelSwitch", async (member, newChannel, oldChannel) => {
//   console.log(newChannel.guild.id, newChannel.guild.name )
//   if(newChannel.guild.id === process.env.GUILD_ID) {
//     bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + (member.nick ? member.nick : member.username) + " が " + oldChannel.name + " から " + newChannel.name + " に移動しました。");
//     try {
//       let newStatus = await UserStatus.create({
//         user_id: member.id,
//         name: member.username,
//         guild_id: member.guild.id,
//         io: 3
//       });
//     } catch(ex) {
//       console.log(ex);
//     }
//   } else if(newChannel.guild.id === process.env.GUILD_ID2) {
//     bot.createMessage(process.env.CHANNEL2, time.formatTime() + " に " + (member.nick ? member.nick : member.username) + " が " + oldChannel.name + " から " + newChannel.name + " に移動しました。");
//   }
// });
bot.on("typingStart", async (channel, user) => {
  // console.log(channel)
  console.log(1231212)
  const meu = channel.guild.channels
  meu.map(async (me) => {
    const takashi = me
    console.log(me.name)
    console.log(takashi.name)
    console.log(me.id)
    const msg = await me.getMessages()
    console.log(msg.channel)
    // console.log(await me.getMessages())
    const wer = await me.messages
    console.log(123, wer);
    // me.messages.map((msg) =>{
    //   console.log('123123123')
    //   console.log(msg)
    // })
    console.log('qwerty123')

    const neru = await me.guild.voiceStates
    console.log(888)
    console.log(neru)
    // console.log(neru)

    // await me.map((qqq) => {
    //   console.log(999)
    //   console.log(qqq.voiceStates)
    // })
    if(me.name == "important") {
      // console.log(me.messages)
    }
  });

  // console.log(meu)
})

bot.connect();

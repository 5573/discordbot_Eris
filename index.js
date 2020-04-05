const Eris = require("eris");
const time = require("./service/fDatetime")
require('dotenv').config();
var bot = new Eris(process.env.TOKEN);

bot.on("ready", () => {
    console.log("Ready");
});

bot.on("voiceChannelJoin", (member, newChannel) => {
    bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + member.nick + " が " + newChannel.name + " に入室しました。");
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
        bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + member.nick + " が " + oldChannel.name + " から退出しました。");
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
        bot.createMessage(process.env.CHANNEL1, time.formatTime() + " に " + member.nick + " が " + oldChannel.name + " から " + newChannel.name + " に移動しました。");
});


bot.connect();

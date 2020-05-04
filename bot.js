require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
    console.log('ready...');
});


client.on('message', message => {
    if(message.author.bot){
        return;
    }
    client.channels.cache.filter(ch => console.log(ch.name))
    if (message.channel.name == ("anonymous")){
        message.delete();
        const ch_name = "anonymous";
        client.channels.cache.filter(ch => ch.name === ch_name).forEach(ch => ch.send({embed: {
          title: message.content,
          color: 0xff1f48,
          timestamp: new Date(),
          footer: {
              text: "anonymous-public-chat"
          },
          thumbnail: {
              url: "https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png"
          }
          // fields: [
          //     {
          //         name: "サーバー",
          //         value: `${message.guild.name} (${(message.guild.id)})`,
          //         inline: true
          //     },
          //     {
          //         name: "チャンネル",
          //         value: `${message.channel.name} (${message.channel.id})`,
          //         inline: true
          //     },
          //     {
          //         name: "ユーザー",
          //         value: `${message.author.username} (${message.author.id})`,
          //         inline: true
          //     }
          // ]
        }
      }))
    }
  })



client.login(token);

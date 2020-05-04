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
        }
      }))
    }
  })

  client.on('message', async message => {
      if(message.author.bot){
          return;
      }

      if (message.channel.name == ("public-chat")){
          message.delete();
          const ch_name = "public-chat";
          const meu = client.channels.cache.filter(ch => ch.name === ch_name)
          meu.forEach(async function(ch) {
            try {
              const webhooks = await ch.fetchWebhooks()
              const webhook = webhooks.first()
              webhook.send(message, {
                username: message.author.username,
          			avatarURL: message.author.displayAvatarURL(),
          			// embeds: [embed],
          		});
            } catch (err){
              console.error('Error trying to send: ', err);
            }
          })
        }
      })




client.login(token);

const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json'));
require('dotenv').config();
const client = new Discord.Client();
const token = process.env.BOT_TOKEN ;

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', message => {
 if (message.content.startsWith(! + "ping")) {
    
    var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.sendMessage("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");

}});


client.on('guildMemberAdd',member=>{
    let embed = new Discord.MessageEmbed()
    .setTitle(`${member.user.tag} ${config.messages.welcomeMessage}`)
    let channel = member.guild.channels.cache.get(config.channels.welcomeChannel);
    channel.send(embed);
})
client.login(token);

//
//PLEASE MENTION ME WHEN USING THIS CODE OR U WILL BE IN BIG TROUBLE
//

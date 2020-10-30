const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {
    try{
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/hug");
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Sweet:3**`)
    .setImage(body.url) 
    .setFooter(":3")
    message.channel.send(embed)
    } catch (e) {
        message.channel.send('Something went wrong')
    }
};
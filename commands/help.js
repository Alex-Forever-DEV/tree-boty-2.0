const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
    .setTitle("Tree Boty")
    .setColor("RANDOM")
    .setThumbnail(
      client.user.displayAvatarURL({ format: "png", dynamic: true }) +"?size=2048")
    .setDescription(
      "📃|Changelogs:  Update Help Command | Tree Boty Is multiple Purporse Bot And Still Under development, found bugs? report to AlexForeverDev#0470, [Invite me](https://discord.com/oauth2/authorize?client_id=728196789362229328&scope=bot&permissions=0) ")
    .addField( "<:4228_discord_bot_dev:770119592239562793>|Dev","`stats`, `eval`", true)
    .addField("🔧|Utility", "`ping`, `help`, `uptime` `servericon`", true)
    .addField("⚽|Fun", "`say`, `hug`, `meme`", true)
    .addField("🎵|Music","`play`, `pause`,`stop`, `skip`,`force skip`, `remove`,`search` , `playlist`, `queue`, `volume`, `nowplaying`, `resume`, `skipto`", true)
    .addField("🛡️|Moderation", "`kick`, `ban`, `purge`", true);
  message.channel.send(embed);
};

const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
    .setColor("#3b5998")
    .setTitle("User Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username:**", `${message.author.username}`, true)
    .addField("**Discriminator:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Created At:**", `${message.author.createdAt}`, true)
    .setFooter(`Developed By Reflect#3350`, bot.user.displayAvatarURL);
      
      message.channel.send({embed: uEmbed});
    
}


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "!userinfo (@mention)",
    accessableby: "Members",
    aliases: ["ui"]
}
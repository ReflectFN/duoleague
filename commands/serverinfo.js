const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor("#7d47fc")
    .setTitle("Duo League Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .addField("**Server Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setFooter(`Developed By Reflect#3350`, bot.user.displayAvatarURL);
        
    message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["si", "serverdesc"]
}    
const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor("#33a1ee")
            .setAuthor(`Duo League Help`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setAuthor(`Help Command!`, message.guild.iconURL)
        .setColor("#33a1ee")
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new Discord.RichEmbed()
        .setColor("#33a1ee")
        .setAuthor(`Duo League`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the Duo League Bot!\nThe bot prefix is: ${prefix}`)
        .addField(` **Commands:** `, "``help`` ``serverinfo`` ``userinfo`` ``music`` ``say`` ``uptime``")
        .addField(` **Staff:** `, "``addrole`` ``removerole`` ``ban`` ``unban`` ``kick`` ``mute`` ``unmute`` ``softban``")
        .addField(` **Admin:** `, "``shutdown`` ``reload``")
        .setFooter("Developed By Reflect#3350", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}


module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "!usage",
    description: "",
    accessableby: "Members"
}
const Discord = require("discord.js")

module.exports = {
    name: 'messageUpdate',
    execute(oldMessage, newMessage, bot) {
        const embed = new Discord.EmbedBuilder()
        .setTitle(`Message modifié !`)
        .setDescription(`
        ${oldMessage.author} a modifié un message dans le salon <#${oldMessage.channel.id}> !
        > Ancien message: ${oldMessage.content}
        > Nouveau message: ${newMessage.content}
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})

        if(bot.config.salon.msgEdit == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.msgEdit)
            if(salon) salon.send({ embeds: [embed] })
            else return
        }
    }
}
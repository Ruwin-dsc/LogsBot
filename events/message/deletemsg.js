const Discord = require("discord.js")

module.exports = {
    name: 'messageDelete',
    async execute(message, bot) {
        if(!message.author) return
        const audit = await message.guild.fetchAuditLogs({ limit: 1, type: Discord.AuditLogEvent.MessageDelete });
        const deletionLog = audit.entries.first();
        if (!deletionLog) return;

        const { executor, target } = deletionLog;

        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Message supprimé !`)
        .setDescription(`
        ${message.author} a supprimé son message dans le salon <#${message.channel.id}> !
        > Message: ${message.content}
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


        const embed = new Discord.EmbedBuilder()
        .setTitle(`Message supprimé !`)
        .setDescription(`
        ${executor} a supprimé le message de ${message.author} dans le salon <#${message.channel.id}> !
        > Message: ${message.content}
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})

        if(bot.config.salon.msgSuppr == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.msgSuppr)
            if(salon) {
                if (message.embeds.length > 0) {
                    return salon.send({
                        content: `**${executor.username}** a supprimé l'embed ci-dessous dans le salon <#${message.channel.id}>`,
                        embeds: [message.embeds[0]]
                    });
                } else if (message.author.id === executor.id) {
                    salon.send({ embeds: [embed1] });
                } else {
                    salon.send({ embeds: [embed] });
                }
            }
            else return
        }
    }
}
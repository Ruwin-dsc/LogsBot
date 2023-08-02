const Discord = require("discord.js")

module.exports = {
    name: 'messageDeleteBulk',
    async execute(message, channel, bot) {
        const audit = await channel.guild.fetchAuditLogs({ type: Discord.AuditLogEvent.MessageBulkDelete });
        const deletionLog = audit.entries.first();
        if (!deletionLog) return;

        const { executor, target } = deletionLog;

        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Groupe de messages supprimés !`)
        .setDescription(`
        ${executor} a supprimé ${message.size} message(s) dans le salon <#${channel.id}> !
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.msgBulk == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.msgBulk)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
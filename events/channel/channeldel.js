const Discord = require("discord.js")

module.exports = {
    name: 'channelDelete',
    async execute(channel, bot) {
        const audit = await channel.guild.fetchAuditLogs({ limit: 1, type: Discord.AuditLogEvent.ChannelDelete });
        const deletionLog = audit.entries.first();
        if (!deletionLog) return;

        const { executor, target } = deletionLog;

        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Salon supprimé !`)
        .setDescription(`
        ${executor} a supprimé un salon !
        > Salon: ${channel.name}
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.salondel == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.salondel)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
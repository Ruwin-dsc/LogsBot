const Discord = require("discord.js")

module.exports = {
    name: 'channelCreate',
    async execute(channel, bot) {
        const audit = await channel.guild.fetchAuditLogs({ limit: 1, type: Discord.AuditLogEvent.ChannelCreate });
        const deletionLog = audit.entries.first();
        if (!deletionLog) return;

        const { executor, target } = deletionLog;

        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Salon créée !`)
        .setDescription(`
        ${executor} a créé un salon !
        > Salon: <#${channel.id}>
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.saloncre == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.saloncre)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
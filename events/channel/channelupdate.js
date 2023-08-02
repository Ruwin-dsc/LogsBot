const Discord = require("discord.js")

module.exports = {
    name: 'channelUpdate',
    async execute(oldChannel, newChannel, bot) {
        const audit = await oldChannel.guild.fetchAuditLogs({ limit: 1, type: Discord.AuditLogEvent.ChannelUpdate });
        const deletionLog = audit.entries.first();
        if (!deletionLog) return;

        const { executor, target } = deletionLog;

        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Salon modifié !`)
        .setDescription(`
        ${executor} a modifié un salon !
        > Salon: ${oldChannel}
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
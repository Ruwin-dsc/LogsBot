const Discord = require("discord.js")

module.exports = {
    name: 'roleDelete',
    async execute(role, bot) {
        const audit = await role.guild.fetchAuditLogs({ limit: 1, type: Discord.AuditLogEvent.ChannelCreate });
        const deletionLog = audit.entries.first();
        if (!deletionLog) return;

        const { executor, target } = deletionLog;

        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Rôle supprimé !`)
        .setDescription(`
        ${executor} a supprimé un rôle !
        > Rôle: ${role.name}
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.roledel == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.roledel)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
const Discord = require("discord.js")

module.exports = {
    name: 'emojiCreate',
    async execute(emoji, bot) {
        const audit = await emoji.guild.fetchAuditLogs({ limit: 1, type: Discord.AuditLogEvent.EmojiCreate });
        const deletionLog = audit.entries.first();
        if (!deletionLog) return;

        const { executor, target } = deletionLog;

        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Emoji créée !`)
        .setDescription(`
        ${executor} a créé un émoji !
        > Emoji: ${emoji}
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.emojicre == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.emojicre)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
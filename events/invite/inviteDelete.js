const Discord = require("discord.js")

module.exports = {
    name: 'inviteDelete',
    async execute(invite, bot) {
        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Invitation supprimée !`)
        .setDescription(`
        Une invitation a été supprimé !
        > Invitation: https://discord.gg/${invite.code}
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.invitedel == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.invitedel)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
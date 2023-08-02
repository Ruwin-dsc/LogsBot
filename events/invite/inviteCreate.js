const Discord = require("discord.js")

module.exports = {
    name: 'inviteCreate',
    async execute(invite, bot) {
        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Invitation créée !`)
        .setDescription(`
        <@${invite.inviterId}> a créé une invitation !
        > Invitation: https://discord.gg/${invite.code}
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.invitecre == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.invitecre)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
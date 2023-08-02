const Discord = require("discord.js")

module.exports = {
    name: 'guildMemberRemove',
    async execute(member, bot) {
        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Membre Quitté !`)
        .setDescription(`
        ${member} a quitté le serveur !
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.leaveMember == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.leaveMember)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
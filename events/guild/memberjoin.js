const Discord = require("discord.js")

module.exports = {
    name: 'guildMemberAdd',
    async execute(member, bot) {
        const embed1 = new Discord.EmbedBuilder()
        .setTitle(`Membre rejoint !`)
        .setDescription(`
        ${member} a rejoint le serveur !
        `)
        .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`})


       

        if(bot.config.salon.joinMember == "") return 
        else {
            const salon = bot.channels.cache.get(bot.config.salon.joinMember)
            if(salon) {

                    salon.send({ embeds: [embed1] });
            }
            else return
        }
    }
}
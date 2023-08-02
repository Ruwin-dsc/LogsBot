const { EmbedBuilder } = require("discord.js");
const Discord = require('discord.js')

module.exports = {
    name: 'voiceStateUpdate',
    async execute(oldState, newState, bot) {
        const member = oldState.member || newState.member;
        
            if (oldState.channel && oldState.channel !== newState.channel) {
                const embed = new EmbedBuilder()
                    .setDescription(`${member} s'est déconnecté de <#${oldState.channel.id}>`)
                    .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`});
                
                    if(bot.config.salon.voice == "") return 
                    else {
                        const salon = bot.channels.cache.get(bot.config.salon.voice)
                        if(salon) {
            
                                salon.send({ embeds: [embed] });
                        }
                        else return
                    }
            }
            
            if (newState.channel && oldState.channel !== newState.channel) {
                const embed = new EmbedBuilder()
                    .setDescription(`${member} s'est connecté à <#${newState.channel.id}>`)
                    .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`});
                
                    if(bot.config.salon.voice == "") return 
                    else {
                        const salon = bot.channels.cache.get(bot.config.salon.voice)
                        if(salon) {
            
                                salon.send({ embeds: [embed] });
                        }
                        else return
                    }
            }
    }
};
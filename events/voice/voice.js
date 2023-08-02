const { EmbedBuilder } = require("discord.js");
const Discord = require('discord.js')

module.exports = {
    name: 'voiceStateUpdate',
    async execute(oldState, newState, bot) {
        const oldUser = oldState.member;
        const newUser = newState.member;

            if (oldState.mute !== newState.mute) {
                const action = newState.mute ? "mute" : "démute";
                const embed = new EmbedBuilder()
                    .setDescription(`${newUser} s'est ${action} dans <#${oldUser.voice.channelId}>`)
                    .setFooter({ text: `By ruwinou (https://discord.gg/zcN3sB5KSv)`});

                    if(bot.config.salon.roledel == "") return 
                    else {
                        const salon = bot.channels.cache.get(bot.config.salon.roledel)
                        if(salon) {
            
                                salon.send({ embeds: [embed] });
                        }
                        else return
                    }
            } else if (oldState.deaf !== newState.deaf) {
                const action = newState.deaf ? "mute casque" : "démute casque";
                const embed = new EmbedBuilder()
                    .setDescription(`${newUser} s'est ${action} dans <#${oldUser.voice.channelId}>`)
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
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials
} = require("discord.js");
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildInvites,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.ThreadMember,
    Partials.GuildScheduledEvent,
  ],
  disableMentions: 'everyone',
  disableMentions: 'all'
});

bot.setMaxListeners(70)

bot.config = require("./config")

const anticrashHandler = require("./utils/anticrash");
anticrashHandler(bot);
const eventdHandler = require("./handlers/event.js")(bot);

console.log(`
██╗    ██╗██╗  ██╗██╗████████╗███████╗██╗  ██╗ █████╗ ██╗     ██╗     
██║    ██║██║  ██║██║╚══██╔══╝██╔════╝██║  ██║██╔══██╗██║     ██║     
██║ █╗ ██║███████║██║   ██║   █████╗  ███████║███████║██║     ██║     
██║███╗██║██╔══██║██║   ██║   ██╔══╝  ██╔══██║██╔══██║██║     ██║     
╚███╔███╔╝██║  ██║██║   ██║   ███████╗██║  ██║██║  ██║███████╗███████╗
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝
        by ruwinou `)
bot.login(bot.config.token);
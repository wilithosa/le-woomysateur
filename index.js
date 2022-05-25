const { CategoryChannel, Client } = require('discord.js')
const Discord = require('Discord.js')
const bot = new Discord.Client()

bot.login('ODU1NzU3NzQ4NTMyNDEyNDI3.YM3Igg.SAp8fTMrHvSvq_XNXYXkHuaGuEc')

bot.on('message', function (message) {
    if (message.content === 'w salut'){
        message.reply('Wesh wesh calamar')
     }
    })

bot.on('message', function (message) {
    if (message.content === 'w random'){
        message.reply('1,2,3,4,5,6,7,8,9,10')
     }
    })

bot.on("guildMemberAdd", member => {
    console.log("un member est arrivé !");
    member.guild.channels.cache.find(channel => channel.id === "797154179025207306").send("un nouveau membre vien d'arrivé ");
    });
    
bot.on("guildMemberRemove", member => {
    console.log("un member est partie !");
    member.guild.channels.cache.find(channel => channel.id === "797154179025207306").send("un membre vien de partire");
    });

bot.on('message', function (message) {
    if (message.content === 'w Je possède des thunes'){
        message.reply('https://tenor.com/view/thunes-poss%C3%A8de-je-poss%C3%A8de-des-thunes-%C3%A0l-aise-financi%C3%A8rement-gif-22358922')
        }
    })

bot.on('message', function (message) {
    if (message.content === '^^lc @le woomysateur#6300'){
        message.reply('ok pourquoi pas...')
         }
     })

    bot.on('message', function (message) {
    if (message.content === 'w sa vas ?'){
        message.reply('oui et toi')
     }
    })

bot.on('message', function (message) {
    if (message.content === 'w oui vais bien'){
        message.reply('trop bien alors')
        }
    })

 bot.on('message', function (message) {
    if (message.content === 'w non je vais pas bien'){
        message.reply('ah pk')
        }
    })
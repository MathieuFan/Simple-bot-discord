const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require ('./config.json')

bot.login(config.token)
let prefix = '!'

bot.on('ready', function () {
  console.log("I'm ready to work !")
})

bot.on('message', msg => {

    if(msg.content.startsWith("Hi !")) {
        msg.reply("Hello my friend !")
        console.log("I say Hi")    
    }
    if(msg.content.startsWith(prefix+"info")) {
        msg.channel.send("The bot is made by Mathieu Fan\nIt's a really simple discord bot working with nodejs and the librarie \"discord.js\"")
    }
 
})
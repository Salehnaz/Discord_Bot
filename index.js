const Discord = require ('discord.js')

require ('dotenv').config();

const client = new Discord.Client()

client.on("ready", () =>{
    console.log('Logged in as  ')
})


client.on("message", msg =>{
    if (msg.content =="ping"){
        msg.reply("pong")
    }
})


client.login(process.env.TOKEN)
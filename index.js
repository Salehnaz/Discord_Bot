const Discord = require ('discord.js')

require ('dotenv').config();                         // this is for including the .env file to index page

const client = new Discord.Client()                  // this used for creating a client and we are playing with that client

client.on("ready", () =>{
    console.log('Logged in as  ')
})

                                                   
client.on("message", msg =>{
    if (msg.content =="ping"){
        msg.reply("pong")
    }
})                                                   // this function is actually reading msg content and responding . 


client.login(process.env.TOKEN)
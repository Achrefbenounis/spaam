const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("597547432951414804")
setInterval(function() {
channel.send(`dsgfsjrgirhngirejgneigbegpnkrdsnfnkgnrvjmkrfgnjingfgnkgkldkgnrlsùgnklsgnglmr`)
}, 30)
})

client.login(process.env.BOT_TOKEN);
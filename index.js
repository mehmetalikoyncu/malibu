const { channelLink } = require("discord.js");
const MainClient = require("./bott");
const client = new MainClient();
const chalk = require("chalk")

client.on('ready', () => {
  client.user.setActivity('mali ile')
  console.log(chalk.green('Bot aktifleştirildi.'))
})

client.connect()

module.exports = client; 
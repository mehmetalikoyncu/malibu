const chalk = require("chalk");
const delay = require("delay");
const { Locale } = require("discord.js");

module.exports = async (client, id) => { 
    await delay(2000); 
    console.log(chalk.greenBright(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Hazır`))
}


const chalk = require('chalk');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "botkapa",
        description: "bot kapatma!",
        kategori: "diger",
        aliases: ["stopbot", "botkapa"],
        kullanım: "botkapa",
    },
    run: async (client, message, args) => {
    if(message.author.id != client.sahip) return message.channel.send("günün türkosu selam naber?")

    const restart = new EmbedBuilder()
        .setDescription("**Bot kapatılıyor!!!!**")
        .setColor("#000001");

    await message.channel.send({ embeds: [restart] });
        console.log(chalk.red(`Bot Kapatılıyor...`));
            
    process.exit();
    }
};


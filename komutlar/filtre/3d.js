const { EmbedBuilder } = require('discord.js');
const delay = require('delay');

module.exports = {
    config: {
        name: "3d",
        description: "3d filtresi",
        kategori: "filtre",
        aliases: [],
        kullanım: "3d",
    },
    run: async (client, message) => {
        const msg = await message.channel.send("Yükleniyor lütfen bekleyin!")
        
        const queue = client.distube.getQueue(message);
        if (!queue) msg.edit(`Şu anda sırada hiç bir şey yok!`)
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.members.me.voice.channel) return msg.edit("Aynı ses kanalında olmanız gerekmektedir!")

        queue.filters.add("3d");

        const embed = new EmbedBuilder()
  .setAuthor({ 
    name: '3D Aktifleştirildi', 
    iconURL: 'https://cdn.discordapp.com/emojis/758423098885275748.gif'
  })
  .setColor('#000001');

await delay(1);
msg.edit({ content: ' ', embeds: [embed] });
    }
};
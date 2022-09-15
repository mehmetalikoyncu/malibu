const MainClient = require("./bott");
const client = new MainClient();


client.on("ready", () => {
    console.log('Bot aktifleştirildi.')
    client.user.setActivity("mali ile")
  })


client.connect()

module.exports = client; 
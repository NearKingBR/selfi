exports.run = (client, message, args) => {
    message.channel.send(`Em funcionamento!!!! total de ${client.channels.size} Canais, em ${client.guilds.size} servers, um total de ${client.users.size} usuarios.`)

};
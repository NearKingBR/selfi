    exports.run = (client, message, args) => {

        let sincon = message.guild.iconURL;
        let statusEmbed = new Discord.RichEmbed()
        .setTitle("Estou em Funcionamento, Senhor!!")
        .addBlankField()
        .setColor("#aaff00")
        .setDescription("Informações sobre min:")
        .addField("Minha quantidade atual de Canais é:", `${client.channels.size}`)
        .addField("Minha Quantidade atual de Servidores é:", `${client.guilds.size}`)
        .addField("Minha quantidade atual de Usuários é:", `${client.users.size}`)
        .setThumbnail(sincon)
        .setTimestamp();
    

        return message.channel.send(statusEmbed);
    };

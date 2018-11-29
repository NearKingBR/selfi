exports.run = (client, message, args) => {
let reason = args.slice(0).join(' ');
const r = "235075700262961152"
const n = "235075700262961152"
if (message.author.id === r || message.author.id === n){
    if(reason.length > 0) {
        client.users.forEach(user => {
            user.send(message.content.split(' ').slice(1).join(' '))
        })
    message.channel.send("Anúncio enviado.");
    } else {
        message.channel.send("Cite o anúncio desejado.")
    }
} else {
    message.channel.send("Sem permissão.");
}
}

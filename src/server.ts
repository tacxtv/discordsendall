import {Client, GatewayIntentBits} from "discord.js"

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers],
    partials: [1, 3, 4],
})

client.on('ready', () => {
    console.log(`Logged in as ${client?.user?.tag}!`)
})

client.on('messageCreate', (msg) => {
    console.log('msg', msg.content)
    if (msg.content === '!sendall') {
        msg.guild?.members.list()
            .then(members => {
                members.forEach(member => {
                    if (member.user.bot) return
                    member.send('Test').catch(console.error)
                })
            })
    }
})

client.login("xxx")
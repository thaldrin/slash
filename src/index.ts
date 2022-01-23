import 'dotenv/config'
import { SlashCreator, GatewayServer } from 'slash-create'
import { Client, Intents } from 'discord.js'
import Logger from './utils/log';
import Events from "./utils/events";

const client = new Events({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const path = require('path');

const creator = new SlashCreator({
    applicationID: process.env.DISCORD_APP_ID as string,
    publicKey: process.env.DISCORD_PUBLIC_KEY,
    token: process.env.DISCORD_BOT_TOKEN,
    client
});

creator.on("commandError", console.error)
console.log(path.join(__dirname, 'slashcommands'))
creator
    .withServer(
        new GatewayServer(
            (handler: any) => client.ws.on('INTERACTION_CREATE', handler),
        )
    )
    .registerCommandsIn(path.join(__dirname, 'slashcommands'))
    .syncCommands();

// client.login(process.env.DISCORD_BOT_TOKEN);
// client.
Logger.info(`Starting Slash Creator with application ID ${process.env.DISCORD_APP_ID}`);

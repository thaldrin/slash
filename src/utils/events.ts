import { Client, Collection } from "discord.js";
import { readdirSync as read } from "fs";
import { join } from 'path'

export default class Events extends Client {
    events: Collection<string, any>;
    constructor(Construct: any) {
        super({ intents: Construct?.intents, });
        this.events = new Collection<string, any>();

        this.load()
        this.login(process.env.DISCORD_BOT_TOKEN)
    }

    async load() {
        let path = [__dirname, '..', 'events']
        console.log(`Loading events...`);
        console.log(join(...path));
        const events = await read(join(...path))
        // console.log(events);
        events.filter(file => file.endsWith(".js") || file.endsWith(".ts") && !file.endsWith(".d.ts")).forEach(file => {
            try {
                const event = require(join(...path, file));
                // console.log(event)
                console.log(`Loaded event: ${file}`);
                this.events.set(event.name, event);
                this.on(event.name, event.run.bind(null, this));
            } catch (error) {
                console.error(error);
            }
        })
    }
}
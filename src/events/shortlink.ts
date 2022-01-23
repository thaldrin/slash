import Logger from "../utils/log";
import { Message } from "discord.js"
import modulus from "../utils/modulus";
import Shortlink from "../utils/shortlink";

module.exports = {
    name: "messageCreate",
    run: async (_client: any, _message: Message) => {
        if (_message.author.bot) return
        if (_message.channel.type === "DM") return
        try {
            // @ts-ignore
            let server = await modulus.server(_message.guild.id)
            if (!server.shortlinks) return
            let SLs = await Shortlink(_message.content)
            if (!SLs) return

            return _message.channel.send(SLs.join(" "))
        } catch (error) {
            console.error(error)
        }
    }
}
import { SlashCommand, CommandOptionType, SlashCreator, CommandContext, ApplicationCommandType } from 'slash-create';

export default class ShortlinkCommand extends SlashCommand {
    constructor(creator: SlashCreator) {
        super(creator, {
            name: 'shortlink',
            // type: ApplicationCommandType.CHAT_INPUT,
            guildIDs: ['828978320279863306'],
            options: [
                {
                    name: 'site',
                    type: CommandOptionType.STRING,
                    required: true,
                    description: 'The Website you want to have a URL for.',
                    // autocomplete: true,
                    choices: [
                        {
                            name: 'Twitter',
                            value: 'https://twitter.com/',
                        },
                        {
                            name: 'Twitch',
                            value: 'https://twitch.tv/',
                        },
                        {
                            name: 'FurAffinity',
                            value: 'https://furaffinity.net/',
                        },
                        {
                            name: 'Youtube',
                            value: 'https://youtu.be/',
                        },
                        {
                            name: 'github',
                            value: 'https://github.com/',
                        },
                    ]
                },
            ]
        });
        this.filePath = __filename;
        console.log("testing")
    }

    async run(ctx: CommandContext) {
        try {
            console.log(ctx.options)
            return "200 SUCCESS"
        } catch (error) {
            // Logger.error(error as any);
            // @ts-ignore
            return ctx.send(`Error [SHORTLINKS]: ${error.message}`)
        }

    }
}


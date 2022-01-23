import { SlashCommand, CommandOptionType, SlashCreator, CommandContext, ApplicationCommandType } from 'slash-create';
import Logger from '../utils/log';
import sourcefinder from '../utils/sourcefinder';
export default class HelloCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'Find Image Source',
      type: ApplicationCommandType.MESSAGE,
      guildIDs: ['828978320279863306'],
      deferEphemeral: true,
    });
  }

  async run(ctx: CommandContext) {
    try {
      // @ts-ignore
      Logger.log("Looking for image source...")
      // @ts-ignore
      let sources = await sourcefinder.find(ctx.targetMessage.content)
      if (!sources) throw new Error("No Sources found")

      // @ts-ignore
      return ctx.send(`<${sources}>`)
    } catch (error) {
      Logger.error(error as any);
      // @ts-ignore
      return ctx.send(`Error: ${error.message}`)
    }

  }
}


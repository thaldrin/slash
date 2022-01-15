import { SlashCommand, CommandOptionType, SlashCreator, CommandContext, ApplicationCommandType } from 'slash-create';
import sourcefinder from '../utils/sourcefinder';
export default class HelloCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'Find Image Source',
      type: ApplicationCommandType.MESSAGE,
      guildIDs: ['828978320279863306']
    });
  }

  async run(ctx: CommandContext) {
    // @ts-ignore
    console.log(sourcefinder.find(ctx.targetMessage.content))
    return ctx.targetMessage
  }
}

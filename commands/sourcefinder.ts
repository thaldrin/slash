import { SlashCommand, CommandOptionType, SlashCreator, CommandContext } from 'slash-create';

export default class HelloCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'sourcefinder',
      description: 'Says hello to you.',
      // guildIDs: ['828978320279863306'],
      options: [
        {
          type: CommandOptionType.STRING,
          name: 'Link',
          description: 'Link to the Image you want the Source for.',
        },
      ]
    });
  }

  async run(ctx: CommandContext) {
    return ctx.options.Link
  }
}

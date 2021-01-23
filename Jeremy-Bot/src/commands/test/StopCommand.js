const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('stop', 'info', []);
  }

  async run(client, message, args) {
    message.channel.send("you can't tell me what to do");
  }
}
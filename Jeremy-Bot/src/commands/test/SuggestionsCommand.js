const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('suggestions', 'info', []);
  }

  async run(client, message, args) {
    message.channel.send("if you ask nicely i might do something: \n`suggestions help stop \ngaming coding bible beans`");
  }
}
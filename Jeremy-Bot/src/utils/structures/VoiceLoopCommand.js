const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VoiceLoopCommand extends BaseCommand {

    constructor(voiceJson, command, category, aliases) {
        super(command, category, aliases);
        this.voiceJson = voiceJson;
    }

    async run(client, message, args) {
        if (message.member.voice.channel) {

            const lines = this.voiceJson.lines;
            const intro = this.voiceJson.intro;

            const connection = await message.member.voice.channel.join();
            connection.play(intro);

            async function loop(link) {

                await delay(Math.max(8, (Math.random() * 15)));
                let dispatcher = connection.play(lines[Math.floor(Math.random() * lines.length)]);

                function delay(n) {
                    return new Promise(function (resolve) {
                        setTimeout(resolve, n * 1000);
                    });
                }

                dispatcher.on('finish', () => {
                    // do loop of random messages
                    loop(lines[Math.floor(Math.random() * lines.length)]);
                });

                // Always remember to handle errors appropriately!
                dispatcher.on('error', (e) => {
                    console.error(e);

                    //setTimeout(lines[Math.floor(Math.random() * 120)])
                    loop(lines[Math.floor(Math.random() * lines.length)]);
                });
            }

            // Create first dispatcher
            await loop(connection, lines[Math.floor(Math.random() * lines.length)]);
        }
    }
}
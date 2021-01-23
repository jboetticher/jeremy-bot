const VoiceLoopCommand = require('../../utils/structures/VoiceLoopCommand');


const COMMAND = 'beans';
const COMMAND_GROUP = 'voice';
const COMMAND_ALIASES = ["bean"];
const VOICE_LINES =
{
  "intro": "https://promo.dictatergame.com/files/BeanVoice/bean_intro.mp3",
  "lines":
    [
      "https://promo.dictatergame.com/files/BeanVoice/look_at_them_beans.mp3"
    ]
}

module.exports = class GamingCommand extends VoiceLoopCommand {
  constructor() {
    super(VOICE_LINES, COMMAND, COMMAND_GROUP, COMMAND_ALIASES);
  }
}
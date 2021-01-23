const VoiceLoopCommand = require('../../utils/structures/VoiceLoopCommand');


const COMMAND = 'coding';
const COMMAND_GROUP = 'voice';
const COMMAND_ALIASES = [];
const VOICE_LINES =
{
  "intro": "https://promo.dictatergame.com/files/CodingVoice/coding_intro.mp3",
  "lines":
    [
      "https://promo.dictatergame.com/files/GamingVoice/gaming_1.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_2.mp3"
    ]
}

module.exports = class CodingCommand extends VoiceLoopCommand {
  constructor() {
    super(VOICE_LINES, COMMAND, COMMAND_GROUP, COMMAND_ALIASES);
  }
}
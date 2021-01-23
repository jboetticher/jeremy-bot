const VoiceLoopCommand = require('../../utils/structures/VoiceLoopCommand');


const COMMAND = 'bible';
const COMMAND_GROUP = 'voice';
const COMMAND_ALIASES = [];
const VOICE_LINES =
{
  "intro": "https://promo.dictatergame.com/files/BibleVoice/bible_intro.mp3",
  "lines":
    [
      "https://promo.dictatergame.com/files/BibleVoice/genesis_26.mp3",
      "https://promo.dictatergame.com/files/BibleVoice/genesis_27.mp3",
      "https://promo.dictatergame.com/files/BibleVoice/genesis_28.mp3"
    ]
}

module.exports = class BibleCommand extends VoiceLoopCommand {
  constructor() {
    super(VOICE_LINES, COMMAND, COMMAND_GROUP, COMMAND_ALIASES);
  }
}
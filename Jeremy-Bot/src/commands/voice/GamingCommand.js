const VoiceLoopCommand = require('../../utils/structures/VoiceLoopCommand');


const COMMAND = 'gaming';
const COMMAND_GROUP = 'voice';
const COMMAND_ALIASES = [];
const VOICE_LINES =
{
  "intro": "https://promo.dictatergame.com/files/GamingVoice/gaming_intro.mp3",
  "lines":
    [
      "https://promo.dictatergame.com/files/GamingVoice/gaming_1.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_2.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_3.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_4.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_5.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_6.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_7.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_8.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_9.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_10.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_11.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_12.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_13.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_14.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_15.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_16.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_17.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_18.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_19.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_20.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_21.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_22.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_23.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_24.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_25.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_26.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_27.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_28.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_29.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_30.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_31.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_32.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_33.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_34.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_35.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_36.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_37.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_38.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_39.mp3",
      "https://promo.dictatergame.com/files/GamingVoice/gaming_40.mp3"
    ]
}

module.exports = class GamingCommand extends VoiceLoopCommand {
  constructor() {
    super(VOICE_LINES, COMMAND, COMMAND_GROUP, COMMAND_ALIASES);
  }
}
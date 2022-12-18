const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
  } = require("discord.js");
  
  module.exports = {
    data: {
      name: `modal3`,
    },
  
    async execute(interaction, client) {
      const modaltwo = new ModalBuilder()
        .setCustomId(`done`)
        .setTitle(`Personal Info`);
  
      const INFO1 = new TextInputBuilder()
        .setCustomId("info1")
        .setLabel(`How old are you?`)
        .setPlaceholder(`17`)
        .setMaxLength(10)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);
  
      const INFO2 = new TextInputBuilder()
        .setCustomId("info2")
        .setLabel(`What gender are you?`)
        .setPlaceholder(`Male | Female | Other`)
        .setMaxLength(50)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);
  
      const INFO3 = new TextInputBuilder()
        .setCustomId("info3")
        .setLabel(`What is your time zone?`)
        .setPlaceholder(`PST`)
        .setMaxLength(10)
        .setRequired(true)
        .setStyle(TextInputStyle.Short);

    const INFO4 = new TextInputBuilder()
        .setCustomId("info4")
        .setLabel(`Anything else to add?`)
        .setPlaceholder(`Yes...`)
        .setMaxLength(200)
        .setRequired(false)
        .setStyle(TextInputStyle.Paragraph);
  
      modaltwo.addComponents(new ActionRowBuilder().addComponents(INFO1));
      modaltwo.addComponents(new ActionRowBuilder().addComponents(INFO2));
      modaltwo.addComponents(new ActionRowBuilder().addComponents(INFO3));
      modaltwo.addComponents(new ActionRowBuilder().addComponents(INFO4));
        
      await interaction.showModal(modaltwo);
    },
  };
  
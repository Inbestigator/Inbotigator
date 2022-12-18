const {
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: {
    name: `modal2`,
  },

  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId(`goto3`)
      .setTitle(`Experience`);

    const EXP1 = new TextInputBuilder()
      .setCustomId("exp1")
      .setLabel(`Do you have past experience?`)
      .setPlaceholder(`Yes...`)
      .setMaxLength(200)
      .setRequired(true)
      .setStyle(TextInputStyle.Paragraph)
    const EXP2 = new TextInputBuilder()
      .setCustomId("exp2")
      .setLabel(`What were your responsibilities?`)
      .setPlaceholder(`I was a ... and I was tasked with ...`)
      .setMaxLength(200)
      .setRequired(false)
      .setStyle(TextInputStyle.Paragraph);

    const EXP3 = new TextInputBuilder()
      .setCustomId("exp3")
      .setLabel(`What are you applying for?`)
      .setPlaceholder(`Admin | Head Mod | Moderator`)
      .setMaxLength(200)
      .setRequired(true)
      .setStyle(TextInputStyle.Paragraph);

    const EXP4 = new TextInputBuilder()
      .setCustomId("exp4")
      .setLabel(`Why are you applying?`)
      .setPlaceholder(`I'm applying because...`)
      .setMaxLength(200)
      .setRequired(true)
      .setStyle(TextInputStyle.Paragraph);
      
    const EXP5 = new TextInputBuilder()
      .setCustomId("exp5")
      .setLabel(`How long have you been in the server?`)
      .setPlaceholder(`About ... months`)
      .setMaxLength(20)
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

      modal.addComponents(new ActionRowBuilder().addComponents(EXP1));
      modal.addComponents(new ActionRowBuilder().addComponents(EXP2));
      modal.addComponents(new ActionRowBuilder().addComponents(EXP3));
      modal.addComponents(new ActionRowBuilder().addComponents(EXP4));
      modal.addComponents(new ActionRowBuilder().addComponents(EXP5));

    await interaction.showModal(modal);
  },
};

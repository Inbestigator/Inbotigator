const {
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: {
    name: `apply`
  },
  
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId(`staff-apps`)
      .setTitle(`Staff Applications | P1`);

    const TextInput = new TextInputBuilder()
      .setCustomId("MC1")
      .setLabel(`How many offenses before a mute?`)
      .setPlaceholder(`1 | 2 | 3 | 4 `)
      .setMaxLength(1)
      .setMinLength(1)
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    const MC2 = new TextInputBuilder()
      .setCustomId("MC2")
      .setLabel(`Can staff come up with rules on the spot?`)
      .setPlaceholder(`Y | N`)
      .setMaxLength(1)
      .setMinLength(1)
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    const MC3 = new TextInputBuilder()
      .setCustomId("MC3")
      .setLabel(`How long do you mute for spam?`)
      .setPlaceholder(`1m | 5m | 10m | 20m`)
      .setMaxLength(3)
      .setMinLength(2)
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    modal.addComponents(new ActionRowBuilder().addComponents(MC1));
    modal.addComponents(new ActionRowBuilder().addComponents(MC2));
    modal.addComponents(new ActionRowBuilder().addComponents(MC3));

    await interaction.showModal(modal);
  },
};

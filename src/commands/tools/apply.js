const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('staffapp')
    .setDescription("Apply for staff."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`**Staff Applications**`)
      .setDescription("Apply for certain staff roles.")
      .setColor(client.colour)
      .setThumbnail(`https://media.discordapp.net/attachments/764266969246728203/1050930716726263860/staff.png?width=638&height=671`)
      .addFields([
        {
          name: "```Admin:```",
          value: `> 1 spot available.`
        },
        {
          name: "```Head Moderator:```",
          value: `> 1 spot available.`
        },
        {
          name: "```Moderator:```",
          value: `> 3 spots available.`
        }
      ])

    const button = new ButtonBuilder()
      .setCustomId('apply_modal')
      .setLabel(`Apply`)
      .setStyle(ButtonStyle.Secondary);

    await interaction.reply({
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(button)],
      ephemeral: true

    });
  },
};

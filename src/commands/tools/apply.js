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
      .setDescription("**```Apply for certain staff roles.```**\n>  \n> **Admin:**\n> ```1 spot available.```\n> **Head Moderator:**\n> ```1 spot available.```\n> **Moderator:**\n> ```3 spots available.```\n ​")
      .setColor(client.colour)
      .setThumbnail(`https://media.discordapp.net/attachments/764266969246728203/1050930716726263860/staff.png?width=638&height=671`)

    const button = new ButtonBuilder()
      .setCustomId('modal1')
      .setLabel(`Apply`)
      .setStyle(ButtonStyle.Secondary);

    await interaction.reply({
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(button)],
      ephemeral: true
    });
    // const channel = client.channels.cache.get("1053839192599310387");
    // channel.send({
    //   embeds: [embed],
    //   components: [new ActionRowBuilder().addComponents(button)],
    // });
  },
};

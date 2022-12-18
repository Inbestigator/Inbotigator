const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription("Returns an example embed."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`This is an embed!`)
      .setDescription("This is the description.")
      .setColor(client.colour)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://youtube.com/@Inbestigator`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
      })
      .setURL(`https://dsc.gg/agency`)
      .addFields([
        {
          name: `Field name 1`,
          value: `Field value 2`,
          inline: true,
        },
        {
          name: `Field name 2`,
          value: `Field value 2`,
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  }
}

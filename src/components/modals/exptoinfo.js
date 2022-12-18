const {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: {
    name: `goto3`,
  },

  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`**Personal Info**`)
      .setDescription("You're on to the final stretch, *personal info!*")
      .setColor(client.colour)
      .setThumbnail(`https://cdn.discordapp.com/attachments/1016549315646341152/1053800408096714813/info1.png`);

    const answers = new EmbedBuilder()
      .setTitle(`**Experience | Answers**`)
      .setDescription(`> **Do you have past experience?**\n> -${interaction.fields.getTextInputValue(
        "exp1")}\n> **What were your responsibilities?**\n> -${interaction.fields.getTextInputValue(
            "exp2")}\n> **What are you applying for?**\n> -${interaction.fields.getTextInputValue(
                "exp3")}\n> **Why are you applying?**\n> -${interaction.fields.getTextInputValue(
                    "exp4")}\n> **How long have you been in the server?**\n> -${interaction.fields.getTextInputValue(
                      "exp5")}`)
      .setTimestamp(Date.now())
      .setColor(client.colour)
      .setAuthor({
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      });

    const button = new ButtonBuilder()
      .setCustomId('modal3')
      .setLabel(`Go!`)
      .setStyle(ButtonStyle.Secondary);
    await interaction.update({
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(button)],
      ephemeral: true
      });
    const channel = client.channels.cache.get("1050997414217142312");
      channel.send({
        embeds: [answers],
      });
  }
};

const {
  EmbedBuilder,
  ChannelType,
} = require("discord.js");

module.exports = {
  data: {
    name: "done",
  },
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`**Personal Info | Answers**`)
      .setDescription(`> **How old are you?**\n> -${interaction.fields.getTextInputValue(
        "info1")}\n> **What gender are you?**\n> -${interaction.fields.getTextInputValue(
            "info2")}\n> **What is your time zone?**\n> -${interaction.fields.getTextInputValue(
                "info3")}\n> **Anything else to add?**\n> -${interaction.fields.getTextInputValue(
                    "info4")}`)
      .setTimestamp(Date.now())
      .setColor(client.colour)
      .setAuthor({
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      });

    const embed1 = new EmbedBuilder()
      .setTitle(`**You're all done!**`)
      .setColor(client.colour)
      .setThumbnail('https://cdn.discordapp.com/attachments/1016549315646341152/1053534116391432202/done.png')
      
    await interaction.update({
      embeds: [embed1],
      components: [],
    });
    const channel = client.channels.cache.get("1050997414217142312");
    channel.send({
      embeds: [embed],
    });
    const thread = await client.channels.cache.get("1053839192599310387").threads.create({
      name: `${interaction.user.tag}'s Interview`,
      type: ChannelType.PrivateThread,
      autoArchiveDuration: 60,
      reason: 'Interview post staff application.',
    });
    const threadadd = channel.threads.cache.find(x => x.name === `${interaction.user.tag}'s Interview`);
    await thread.members.add(`${interaction.user.id}`);
    console.log(`Added ${interaction.user.tag} to ${thread.name}`)
  },
};

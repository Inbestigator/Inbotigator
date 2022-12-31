const {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: {
    name: `goto2`,
  },

  let: (MC1A = 0),
  let: (MC2A = 0),
  let: (MC3A = 0),

  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`**Experience**`)
      .setDescription("Now you may go on to the next phase of our staff applications, *experience!*")
      .setColor(client.colour)
      .setThumbnail(`https://cdn.discordapp.com/attachments/1016549315646341152/1053478973432143953/exp.png`);

      const button = new ButtonBuilder()
        .setCustomId('modal2')
        .setLabel(`Go!`)
        .setStyle(ButtonStyle.Secondary);

    console.log(`${interaction.user.tag} submitted an application.`);
    switch (`${interaction.fields.getTextInputValue("MC1")}`) {
      case "2":
        MC1A = 1;
        console.log(`> MC1A = ${MC1A}`);

        break;

      default:
        MC1A = 0;
        console.log(
          `> MC1A = ${MC1A}, they answered: ${interaction.fields.getTextInputValue(
            "MC1"
          )}`
        );
        break;
    }
    switch (`${interaction.fields.getTextInputValue("MC2")}`) {
      case "N":
        MC2A = 1;
        console.log(`> MC2A = ${MC2A}`);

        break;

      default:
        MC2A = 0;
        console.log(
          `> MC2A = ${MC2A}, they answered: ${interaction.fields.getTextInputValue(
            "MC2"
          )}`
        );
        break;
    }
    switch (`${interaction.fields.getTextInputValue("MC3")}`) {
      case "10m":
        MC3A = 1;
        console.log(`> MC3A = ${MC3A}`);

        break;

      default:
        MC3A = 0;
        console.log(
          `> MC3A = ${MC3A}, they answered: ${interaction.fields.getTextInputValue(
            "MC3"
          )}`
        );
        break;
    }

    switch (`${MC1A} ${MC2A} ${MC3A}`) {
      case "1 1 1":
        await interaction.reply({
          content: ``,
          embeds: [embed],
          components: [new ActionRowBuilder().addComponents(button)],
          ephemeral: true,
        });
        console.log(`Pass!`);

        break;

      default:
        interaction.reply({
          content: `Please try again`,
          embeds: [],
          ephemeral: true,
        });

        break;
    }
  },
};

module.exports = {
  data: {
    name: `staff-apps`,
  },

var: MC1A = 0,

  async execute(interaction, client) {
    if (`${interaction.fields.getTextInputValue("MC1")} = 2`) {
      MC1A = 1;
      console.log(MC1A);
      interaction.reply({
        content: `hehehehaw ${interaction.fields.getTextInputValue("MC1")}`,
        channelId: "1050997414217142312"
      });
    };
  },
};

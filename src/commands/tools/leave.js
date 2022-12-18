const { SlashCommandBuilder, MembershipScreeningFieldType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Leave the server hassle free.'),
    async execute(interaction, client) {
        await member.kick;
    },
};
const info = {
    name: "info",
    variants: [
        "{PREFIX}info",
        "{PREFIX}invite",
        "{PREFIX}github",
        "{PREFIX}support",
        "{PREFIX}bug"
    ],
    allowedTypes: ["text", "dm"],
    indexZero: true,
    enabled: true,
    run: ({ message, guild_settings, translation }) => {
        const embed = translation.commands.info.embed_reply;
        message.channel.send({ embed }).catch(console.error);
    }
};

module.exports = { info };

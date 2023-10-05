module.exports = {
    name: 'queue',
    aliases: ["q","songqueue"],
    code:`
    $title[Nerissa's Song List]
    $description[$queue[1;10; {position}- **{title}** by **{artist}** - \n]]
    $footer[Requested by $displayName[$guildID;$authorID;true];$userAvatar]
    `
};
module.exports = {
    name: "memberinfo",
    aliases: ["mi","info"],
    code:  `
    
$onlyPerms[administrator]
Your username and Server Nickname: $username || $userNickname[$guildID;$authorID]
Your ID: $authorID
Your Banner: $authorBanner
`
}
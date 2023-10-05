module.exports = {
    name:"ban",
  aliases:["b"],
    code:`
  $onlyPerms[administrator]
  $title[1; Someone got hit by the Banhammer!]
  $description[1; The Banhammer fell on $username[$mentioned]. He is now banned from the server. Imagine if he was actually a speedrunner (This would be his personal best.)]
  $image[1; $randomText[https://c.tenor.com/_sw_Garhm9UAAAAC/thor-avengers.gif;https://c.tenor.com/LR_Ok6iBkU0AAAAC/subscribe-to-my-onlyfans.gif;https://c.tenor.com/vkDCjozbDksAAAAC/ban-hammer-cinzou.gif;https://c.tenor.com/60VJYgQAz7oAAAAC/banhammer-fight.gif;https://c.tenor.com/w5xO9D6_gdAAAAAC/ban-banned.gif]]
  $ban[$guildID;$mentioned[1];0;$noMentionMessage]`
};
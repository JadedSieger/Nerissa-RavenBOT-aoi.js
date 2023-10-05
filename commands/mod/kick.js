module.exports = {
    name: "kick",
     aliases:["ki","yeet"],
    code: `
  $onlyPerms[administrator]
  $title[1; Kei felt so mad that she had the urge to kick someone.]
  $description[1; Successfully kicked $username[$mentioned[1]] on the face.]
  $image[1; https://c.tenor.com/qzTug6bXbCEAAAAC/kick-knock-out.gif; https://c.tenor.com/PmPwRSkxwUoAAAAC/ex-crazy-girlfriend-kick.gif; https://c.tenor.com/DYLiR4obvyAAAAAC/superman-ball.gif; https://c.tenor.com/2-UhBzbmycsAAAAC/karate-fail.gif; https://c.tenor.com/TTzsPRlM2mIAAAAC/gtfo-kicking.gif; https://c.tenor.com/o4Q9Tw1xzrsAAAAC/tiffany-j-kick-tj-kick.gif; https://c.tenor.com/0Cjz41gNCGUAAAAC/ealge-fc-eagle-fc.gif; https://c.tenor.com/5KyMrWimM9gAAAAC/kick-mara.gif]
  $kick[$mentioned[1];$guildID;$message]
  `
};
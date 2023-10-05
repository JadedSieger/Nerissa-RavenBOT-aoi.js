module.exports ={
    name:'current',
    aliases: ["c","np"],
    code:`
    $title[Now Playing: $songInfo[title]]
    $description[Thumbnail of Current Track: $songInfo[title]
    Song Length: $humanizeMS[$songInfo[duration]]
    ]
    $image[$songInfo[thumbnail]]
    $footer[$get[alt];$userAvatar]

    $let[alt;Requested by $userDisplayName[$authorID]]
    `
};
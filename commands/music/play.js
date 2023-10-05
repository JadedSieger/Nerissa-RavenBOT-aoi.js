module.exports ={
    name: "play",
    aliases: ["p","pl"],
    $if: "old",
    code: `
    $playTrack[$nonEscape[$message];youtube]
    $if[$hasPlayer==false]
    $joinVC
    $endif
    $sendMessage[Added $nonEscape[$message] to the Playing List.]
    `
};
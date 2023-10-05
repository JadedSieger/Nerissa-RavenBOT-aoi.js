const lyricsFinder = require('lyrics-finder');

module.exports = {
    name: "lyrics",
    code: `
        $if[$message]
        $else
        Please provide a song name or artist.
        $endif
        $onlyIf[$httpRequest[https://genius.com/$message;get;].includes("lyrics");Invalid song or artist.]
        $onlyIf[$lyrics[$message]!=;Lyrics not found.]
        $title[Lyrics for $message]
        $description[$lyrics[$message]]
        $color[Red]
    `
};
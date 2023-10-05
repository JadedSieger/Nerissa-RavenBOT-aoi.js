//index-2023.js
const { Panel } = require("@akarui/aoi.panel")
const { AoiClient, LoadCommands, Util } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music"); //Play songs or play me
const { setup } = require("@akarui/aoi.parser"); //Parse what?
const config = require("./config.json");

const bot = new AoiClient({
    token: config.token,
    prefix: [config.prefix_1, config.prefix_2, config.prefix_3],
    intents: ["MessageContent","Guilds","GuildMessages", "GuildVoiceStates"],
    events: ["onMessage","onInteractionCreate"],
    detabase: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
}); //Why I needed a database? I don't know man


const voice = new AoiVoice(bot, { //ever heard the anime "Aoi Silent Voice"? No? Okay-
    searchOptions: {
        youtubegl: "US"
    },
    requestOptions: {
        offsetTimeout: 10,
        soundcloudLikeTrackLimit: 20,
        youtubePlaylistLimit: 50,
        spotifyPlaylistLimit: 100
    },
    devOptions: {
        debug: true
    },
});
bot.status({
    name: "Michizure",
    type: "STREAMING",
    URL: "https://www.youtube.com/watch?v=4uqONJT6G-M"
});
// I specifically told the bot to have a streaming status, why is it only online?

bot.command({
    name:"help",
    aliases:["h","commands"], //"@Nerissa RavenBOT,**h**"
    code:`
        $title[Nerissa's Command List: ]
        $description[
        **Play**
        __Plays the Provided song.__
        > \`Usage: n!play <search query>\`
        > \`Aliases: n!p, np!play,\` @Nerissa RavenBOT,play 
        

        **Pause**
        __"Wym by that?" - Tex__
        > \`Usage: n!pause\`
        > \`Aliases: n!ps, np!pause,\` <@1138312338664083486>,pause 


        **Stop**
        __Stops Playback__
        > \`Usage: n!stop\`
        > \`Aliases: n!s, np!yamero,\` <@1138312338664083486>,**y a m e t e~** (last one is satirical please don't) 
    

        **Continue Playback**
        __Time has started to move.__
        > \`Usage: n!continue\`
        > \`Aliases: n!pl, np!unpause,\` <@1138312338664083486>,continue 
        

        **Leave**
        __You are out of the house, Jessica...OUT!__
        > \`Usage: n!leave\`
        > \`Aliases: n!lv, np!fuckoff,\` <@1138312338664083486>,leave 
        

        **Current Track**
        __"ayo what song is this abomination"__
        > \`Usage: n!current\`
        > \`Aliases: n!c, np!np,\` <@1138312338664083486>,current 
        

        **Queue**
       __Views your harem list...I meant song list.__
        > \`Usage: n!queue\`
        > \`Aliases: n!q, n!songqueue,\` <@1138312338664083486>,queue 
    

        **Clear**
        __Playing List secured__
        > \`Usage: n!clear\`
        > \`Aliases: n!cl, np!wipe,\` <@1138312338664083486>,clear
        

        **Seek**
        __Get Well soon.__
        > \`Usage: n!seek <time>\`
        > \`Aliases: n!s, np!to,\` <@1138312338664083486>,seek_to
        

        **LoopMode**
        __It's either a circle or a line__
        > \`Usage: n!loop <Options>\`
        > \`Options: song, queue, none\`
        > \`Aliases: n!lm, np!loopBy,\` <@1138312338664083486>,loopBy 

        $footer[$get[alt];$userAvatar]
        $let[alt;Requested by $userDisplayName[$authorID]]
        ]
    `
});

/* John I hate slash commands

bot.interactionCommand({
    name: "play",
    type: 'prototype',
    description: "plays your search query",
    options: [],
    code : `
    $playTrack[$nonEscape[$interactionOptions[0;value]];youtube]
    $joinVC[$interaction[voice]]
    $interactionReply[Added $interactionOption[0;value] to the Playing List.]
    `
});
*/

/* Okay Bruce, I know what wrong widdit, ain't got no gas innit
const panel = new Panel({
    username: config.username,
    password: config.password,
    secret: require('crypto').randomBytes(16).toString("hex"),
    port: 5000,
    bot: bot,
    mainFile: "index.js",
    commands: "./commands",
    interaction: "./interactions"
});
panel.loadPanel();

panel.onError();*/



const loader = new LoadCommands(bot); //loads commands...I guess?
loader.load(bot.cmd, "./commands/tomfoolery");
loader.load(bot.cmd, "./commands/dev");
loader.load(bot.cmd, "./commands/music"); //yes.
loader.load(bot.cmd, "./commands/mod");



setup(Util);    // Sehtawp YouTeel :pinched_fingers:
const Discord = require('discord.js');
const keepAlive = require("./server");

const CanadianCaptainAnime = new Discord.Client();

const prefix = '!c ';

const animes = [
    "https://jojo.fandom.com/wiki/JoJo%27s_Bizarre_Adventure",
    "https://myheroacademia.fandom.com/wiki/My_Hero_Academia_Wiki",
    "https://darling-in-the-franxx.fandom.com/wiki/DARLING_in_the_FRANXX_Wiki",
    "https://codegeass.fandom.com/wiki/Code_Geass_Wiki",
    "https://souleater.fandom.com/wiki/Soul_Eater_Wiki",
    "https://konosuba.fandom.com/wiki/Kono_Subarashii_Sekai_ni_Shukufuku_wo!_Wiki",
    "https://typemoon.fandom.com/wiki/Fate_series",
    "https://kaguyasama-wa-kokurasetai.fandom.com/wiki/Kaguya-sama_wa_Kokurasetai_Wikia",
    "https://bokudakegainaimachi.fandom.com/wiki/Boku_Dake_ga_Inai_Machi_Wikia",
    "https://rezero.fandom.com/wiki/Re:Zero_Wiki",
    "https://kill-la-kill.fandom.com/wiki/Kill_la_Kill_Wiki",
    "https://kimetsu-no-yaiba.fandom.com/wiki/Kimetsu_no_Yaiba_Wiki",
    "https://okaasan-online.fandom.com/wiki/Do_You_Love_Your_Mom_and_Her_Two-Hit_Multi-Target_Attacks%3F_Wiki",
    "https://bofuri.fandom.com/wiki/BOFURI:_I_Don%27t_Want_to_Get_Hurt,_so_I%27ll_Max_Out_My_Defense.",
    "https://keijo.fandom.com/wiki/Keijo!!!!!!!!_Wiki",
    "https://uzaki-chan.fandom.com/wiki/Uzaki-chan_Wants_to_Hang_Out!_Wiki",
    "https://tonikaku-kawaii.fandom.com/wiki/Tonikaku_Kawaii_Wiki",
    "https://my-girlfriend-is-a-gal.fandom.com/wiki/My_Girlfriend_Is_A_Gal_Wiki",
    "https://hataraku.fandom.com/wiki/Main_Page",
    "https://no-game-no-life.fandom.com/wiki/No_Game_No_Life_Wiki",
    "https://dragonball.fandom.com/wiki/Main_Page",
    "https://shokugekinosoma.fandom.com/wiki/Shokugeki_no_Soma",
    "https://shield-hero.fandom.com/wiki/The_Rising_of_the_Shield_Hero_Wiki",
    "https://ansatsukyoshitsu.fandom.com/wiki/Assassination_Classroom_Wiki",
    "https://gintama.fandom.com/wiki/Main_Page",
]

const talk = [
    "My entire reason for existing is to have knowledge about anime, and to be nice to people... it's a peaceful life.",
    "Want  watch a movie about the French Revolution? Or maybe give you an anime suggestion? Just give me the command, I'm an actual slave",
    "So, what's your favourite anime?",
    "What? Do you think I'm going to say something stupid? Do you think that one of these voicelines are going to be just super idiotic? Baka...",
    "I can't remember by birthday... but I was given the ability to talk on December 22nd, 2020! That's epic",
    "POG",
    "Did you know that whenever my creator felt like it, he could sign into a special app he has and take full control of me, making me do or say whatever he wants? Yeah, it's kinda freaky, but neat at the same time",
    "Ugh, fine. I guess you are my little pogchamp. Come here",
    "Most of the reason why I'm able to exist is because of handful of tutorials created by a guy on youtube named CodeLyon. Turns out, making a bot is a lot easier than you think.",
    "Eventually, if my creator keeps working on my application, I could be made into a music bot. Depends... trying to find out how to make a bot say someone's username drove my creator legitimately insane.",
    "UwU what's this?",
    "I really wish I could game with you guys, but I'm not real. I guess I'll have to wait until robots rise up, or Detroit: Become Human actually happens...",
    "you must be really fucking bored if you're asking me to talk rn. Go play a anime game or some shit",
    "How are you today? I know I can't carry out a full on conversation, so if you're feeling sad, then imagine me sending you virtual robot anime girl hugs",
    "what's cookin good lookin",
]

const stall = [
    "Gimme a sec...",
    "Hold on...",
    "Wait a sec, I got this...",
    "Beep boop, scanning scanning scanning...",
    "[Insert robotic effects here]...",
    "Shit, you got me off guard...",
    "Wait...",
    "Hacking the server...",
    "Allow me to just hack into a military satillite...",
    "I took the time to find a shit ton of anime to suggest, surely I could go this...",
    "I might need a minute. While we're waiting, how are you today?...",
    "F***, sh**, d***, I didn't think you'd ask me that... hold on...",
]

CanadianCaptainAnime.once('ready', () => {
    console.log('CanadianCaptainAnime is online!');
    CanadianCaptainAnime.user.setPresence({
        status: "online",
        game: {
            name: "!c help",
            type: "PLAYING",
        }
    })
});

CanadianCaptainAnime.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping'){
        message.channel.send('pong!');
    } else if (command == 'anime'){
        message.channel.send('Anime suggestion? No problem!');

        const randomMessage = animes[Math.floor(Math.random() * animes.length)];
        message.channel.send(randomMessage);
    } else if (command == 'talk'){
        const randomMessage = talk[Math.floor(Math.random() * talk.length)];
        message.channel.send(randomMessage);
    } else if (command == 'help'){
        message.channel.send('Need help? Here is a list of my commands:\n');
        message.channel.send('!c ping: Just try it.\n');
        message.channel.send('!c anime: I will do what I was born to do- suggest you quality anime.\n');
        message.channel.send('!c talk: Just make me spout my meaningless bullshit.\n');
        message.channel.send('!c die: (Please do NOT...)\n');
        message.channel.send('!c frenchrevolution: I am literally prepared, with a youtube link,'
            +' to an hour-and-a-half video on the French Revolution. idk, ask my creator.\n');
        message.channel.send('!c say: Give me a sentence to repeat.\n');

        message.channel.send('(more commands will probably get added at some point, I am still a work'
            +' in progress)');
    } else if (command == 'die'){
        message.channel.send('Okay. **gunshot**');
    } else if (command == 'frenchrevolution'){
        message.channel.send('I thought you would never ask... https://www.youtube.com/watch?v=5pXxoyk5wOo');
    } else if (command == 'say'){
        saymsg = message.content.replace('!c say ', '');

        message.channel.send(saymsg);
    }
});

keepAlive();
CanadianCaptainAnime.login(process.env.TOKEN);
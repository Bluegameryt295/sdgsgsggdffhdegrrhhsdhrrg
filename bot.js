const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`Playing`,"#help")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' -={Codes]=- Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 client.on('ready',  () => {
    console.log('By : _xShaDowZx');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  }); 

//warn 
client.on('message', msg => { 
    if (msg.content.startsWith('#warn')) {
      if(!msg.member.hasPermission("MUTE_MEMBERS")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('**mention a user/player**')
      if (!args[1]) return msg.reply('**Reason for warning**')
      if (msg.guild.channels.find('name', '⚠-warns')) {
        msg.guild.channels.find('name', '⚠-warns').send(`
      ***You have been warned*** : ${msg.mentions.members.first()}
      ***___Because you did the following___***
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
});

//ban
client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
    var prefix = "#"
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("447121312960479242")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
});

//kick
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
    var prefix = "#"
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});

//jail
client.on("message", (message) => {
var prefix = "#";
      if (message.content.startsWith(prefix+"jail")) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("** You dont have permission 'Manage Roles' **").catch(console.error);
    if (message.author.bot) return;
      if (!message.channel.guild) return;
      var mention = message.mentions.members.first
      let role = (message.guild.roles.find("name","jail"));      
      if (!role) message.guild.createRole({ name:'jail', permissions:[1] });
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("This is for management");
      if(!message.mentions.members.first()) return message.reply("**Mention player**")
      let member = message.mentions.members.first()
member.addRole(message.guild.roles.find("name","jail")).catch(console.error);
const ra3d = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle('The person entered the jail') 
             .setColor('RANDOM')
              message.channel.sendEmbed(ra3d);    
  }
});

//unjail
client.on("message", (message) => {
var prefix = "#";
      if (message.content.startsWith(prefix+"unjail")) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("** You dont have permission 'Manage Roles' **").catch(console.error);
          if (message.author.bot) return;
      if (!message.channel.guild) return;
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("This is for management");
      if(!message.mentions.members.first()) return message.reply("**Mention player**");
      let member = message.mentions.members.first()
member.removeRole(message.guild.roles.find("name","jail")).catch(console.error);
const ra3d = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle('You were released')
             .setColor('RANDOM')  
              message.channel.sendEmbed(ra3d);    
  }
});

//clear
client.on('message', msg => {
  var prefix ="#"
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Set the number of messages you want to delete 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n The number of messages that have been cleared: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

//ping
client.on('message', message => {
    if (message.author.id === client.user.id) return;
  var prefix = "#"
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

//roll
client.on('message', function(message) {
  var prefix = "#"
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Subtract a certain number from which to withdraw**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

//avatar 
client.on('message', message => {
    if (message.content.startsWith("#avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

//server
client.on('message', function(msg) {
         var prefix = "#"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server Type**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ Number of members__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ Number of members online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ Voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ Owner__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ Server Id__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ The server was done in__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

//id
client.on('message', message => {
    var prefix = "#"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'Bot';
}else {
var w = 'Member';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| Your Name:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ID:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| Your account type:',"**"+ w + "**",true)    
.addField('📛| The code is right for your account:',"**#" +  `${z.discriminator}**`,true)
.addField('**The date in which your account was created | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**The date you entered the server| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | The date of creating your full account:**', message.author.createdAt.toLocaleString())
.addField("**The last message for you | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**Mention correctly  ❌ **').catch(console.error);

}

});

//member
client.on('message', message => {
    if(message.content == '#member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });

//uptime
client.on('message', message => {
    var prefix = "#"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

//say
client.on('message', message => {
  var prefix = "#"
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "say") {
     message.channel.sendMessage(args.join("  "))
     message.delete()
    }
});

//bot owner 
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["236192758765715456"]; 
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**   The owner of the bot is here**` + `✅`)
} else {
   message.reply('**You are not the owner of the bot**' + '❌');   
}
}
});

//bot type
client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "#type"){
message.channel.startTyping();
}
});
client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "#stype"){
message.channel.stopTyping();
}
});

//Welcome
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '❋-welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':loudspeaker: | Welcome to Codes' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| You are the member number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' Server', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
//GoodBye
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`Good Bye! :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`Good bye Nice to meet you :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   remain',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== We wish you the best ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '❋-good-bye')
    if (!channel) return;
    channel.send({embed : embed});
    });

//Suggest
client.on('message', message => {
var prefix = "#"
  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("449243876817895434").send( //Room ID
      "\n" + "**" + "Server :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + "  Proposal : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " Suggestion : " + "**" +
      "\n" + "**" + args + "**")
  }
  }); 
//Report
client.on('message', msg => { 
if (msg.content.startsWith(`#report`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply(`You must mention person first`)

  if (!args[1]) return msg.reply(`Ummm .. Write your message`)

  if (msg.guild.channels.find('name', '📝-report')) { //channel name

    msg.guild.channels.find('name', '📝-report').send(`
  **Report** : ${msg.mentions.members.first()}
  ***Reported by***:  : ${msg.member}
  **Room** : ${msg.channel.name}
  ***Reason*** : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
});
//your bot has been added to new server
client.on('guildCreate', guild => {
    client.channels.get("449245081011224577").send(`**Woops new server ✅
  Server name: __${guild.name}__
  Server owner: __${guild.owner}__**`)
  });
//All bots cmd
client.on('message', message => {
	if(!message.channel.guild) return;
var prefix = "#"
			   if(message.content.startsWith(prefix + 'bots')) {

   
   if (message.author.bot) return;
   let i = 1;
	   const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
		 const embed = new Discord.RichEmbed()
		 .setAuthor(message.author.tag, message.author.avatarURL)
		 .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}

});
//bot
client.on('message', message => {
    if(message.content === "#bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**Memory used 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**Connection Speed  📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**using the processor 💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 Number of servers**' , `${client.guilds.size}`, true)
        .addField('**users number 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});
//MC skins
client.on("message", message => {
    var prefix = "#"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "MCskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
//Date and time
client.on('message' , async (message) => {
    var prefix = "#"
      if (message.content.startsWith(prefix + 'day')) {
  var today = new Date()
  let Day = today.toString().split(" ")[0].concat("day");
  let Month = today.toString().split(" ")[1]
  let Year = today.toString().split(" ")[3]
  message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
  }
  }); 
//emoji 
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async (message) => {
  var prefix = "#"
       if(message.content.startsWith(prefix + "emoji")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});
//flip
client.on('message' , async (message) => {
  var prefix = "#"
 if (message.content.startsWith(prefix + 'flip')) {
  let args = message.content.split(" ").slice(1);
if(!args[0]) return message.channel.send('Correct usage: **ks!reverse (text to reverse)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}..Wait... You broke it!`
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('Input: ', '```' + `${args.join(' ')}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
}
});
//Link
client.on('message', message => {
    if (message.content.startsWith("#Link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**There you go :arrow_down: **")

message.channel.send(`**Link duration: day
Number of uses of the link : 100**`)


    }
});
//Total Ban
  client.on('message', message => {
     if(message.content.startsWith(prefix +"Totalban")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`**This Server have :arrow_right: __${bans.size}__ users got __banned__**`))
  .catch(console.error);
}
});

//Mention Bot
  client.on('message', message => {
  if(message.content == "<@" + `${client.user.id}` + ">"){
    var embed = new Discord.RichEmbed() 
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    .addField(`${prefix}help`, "**to show The Help List**")
    message.channel.send({embed})
  } 
});
//Auto Mute
  client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "RANDOM",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted")
            .addField(`**  You Have Been Muted **` , `**Reason : Advertising Another Discord Link**`)
            .setColor("RANDOM")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**You have been __Muted__ Reason : Advertising Another Discord Link**');
   
       
    }
});
//Invite Manager
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const codes = member.guild.channels.find("name", "❋-invite-tracking");
    
  
     codes.send(`<@${member.user.id}> **joined;** Invited by **<@${inviter.id}>** (**${invite.uses}** invites)`);
   //  codes.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});


















//help
client.on('message', message => {
    if (message.content === "#help") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**─══════ {✯Choose✯} ══════─**')
.addField('     **❧ #help-1 ➺ Codes list** ','**════════════**') //done
.addField('     **❧ #help-2 ➺ General commands**','**════════════**') //done
.addField('     **❧ #help-3 ➺ Music Commands __(Coming Soon)__**' ,'**════════════**') //done
.addField('     **❧ #help-4 ➺ Management orders**' ,'**════════════**') //done
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
///Help Codes
client.on('message', message => {
    if (message.content === "#help-2") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("**:globe_with_meridians: __General commands__**","** **")
.addField("**#ping :stopwatch:**","**Check your connection speed**")
.addField("**#avatar :camping:**","**Pictures of the chosen person**")
.addField("**#bot :floppy_disk:**","**Info about the bot**")
.addField("**#server :recycle:**","**For server information**")
.addField("**#id :id: **", "**Shows your ID**")
.addField("**#member :hearts: **", "**Shows who everyone Status**")
.addField("**#emoji :gem: **", "**Write your word in emoji**")
.addField("**#flip :arrows_clockwise: **","**Flip your word**")
.addField("**#day :cloud: **","**Shows the date and the time**")
.addField("**#Link :link: **","**Give you our Discord invite link**")
.addField("**#MCskin :heart_eyes:  **", "**Shows your minecraft skin**")
.addField("**#achieve :clap: **", "**Achieve something in minecraft**")
.addField("**#sug :notepad_spiral: **", "**Do #sug {Write your suggestion}**")
.addField("**#report :pencil: **","**Report members**") 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//Music commands 
client.on('message', message => {
if (message.content === "#help-3") {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("** :musical_note: Music Commands __(Coming Soon)__ **","** **")
.addField("**#play :musical_note:**","**Turn on the desired**")
.addField("**#stop  :musical_keyboard:**","**Stop required**")
.addField("**#pause :musical_score:**","**Turn off the temp timer**")
.addField("**#resume :mute: **","**Turn on the desired after the stop**")
.addField("**#skip :left_right_arrow:**","**Skip the song**")
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//Staff commands 
client.on('message', message => {
if (message.content === "#help-4") {
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('This property is for management only');
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("**:radioactive: __Management orders__**","** **")
.addField("**#clear :octagonal_sign:**","**Clear Chat**")
.addField("**#kick  :outbox_tray:**","**Kick memebers**")
.addField("**#ban  :no_entry:**","**Ban members**")
.addField("**#mutechannel and #unmutechannel :mute: **","**Mute and Unmute channels**")
.addField("**#jail and #unjail :skull_crossbones: **","**Jail and unjail members**")
.addField("**#warn :warning: **","**Warn members**")
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help-1
client.on('message', message => {
if (message.content === "#help-1") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**⦁All types of codes in __Codes__ Server 💬⦁**')
.addField('     **❧ #help-js ➺ JS codes list** ','**════════════**') //done 
.addField('     **❧ #help-py ➺ PY codes list __(Coming Soon)__** ','**════════════**') //Not Ready yet!
.addField('     **❧ #help-eris  ➺ ERIS  codes list __(Coming Soon)__** ','**════════════**') //Not Ready yet!
.addField('     **❧ #help-io ➺ IO codes list __(Coming Soon)__** ','**════════════**') //Not Ready yet!
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help js
client.on('message', message => {
if (message.content === "#help-js") { 
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**⦁All types of codes in __Codes__ Server 💬⦁**')
.addField('     **❧ #help-js-source ➺ ⦁Source Codes** ','**════════════**') //Done
.addField('     **❧ #help-js-general ➺ ⦁General Codes** ','**════════════**')//Done
.addField('     **❧ #help-js-welcome ➺ ⦁Welcome Codes** ','**════════════**')//Done
.addField('     **❧ #help-js-help ➺ ⦁Help Codes** ','**════════════**') //Done
.addField('     **❧ #help-js-bc ➺ ⦁Broadcast Codes** ','**════════════**')
.addField('     **❧ #help-js-admin ➺ ⦁Management Codes** ','**════════════**')

.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});
//help js source
client.on('message', message => {
    if (message.content === "#help-js-source") { 
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle('**⦁All types of codes in __Codes__ Server 💬⦁**')
    .addField('     **❧ #help-js-source-1  ➺ ⦁Main Source** ','**════════════**')
    .addField('     **❧ #help-js-source-2 ➺ ⦁Main Source with live streaming ,Also with prefix and bot information** ','**════════════**')
    .addField('     **❧ #help-js-source-3 ➺ ⦁Main Source with streaming only** ','**════════════**')
    .addField('     **❧ #help-js-source-4 ➺ ⦁Main Source with Ping Pong!** ','**════════════**')
    .setColor('#7d2dbe')
    message.channel.sendEmbed(embed);
    }
    });
//help js source 1
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-source-1') {
        message.author.send('  **⦁Main Source  | ** https://pastebin.com/RzUwjMgy    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-source-1") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js source 2
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-source-2') {
        message.author.send('  **⦁Main Source with live streaming ,Also with prefix and bot information  | ** https://pastebin.com/vk66BCzW    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-source-2") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });

  //help js source 3
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-source-3') {
        message.author.send('  **⦁Main Source with streaming only  | ** https://pastebin.com/V75aEVF1    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-source-3") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
  //help js source 4
  client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-source-4') {
        message.author.send('  **⦁Main Source with Ping Pong!  | ** https://pastebin.com/kzrtjeKZ    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-source-4") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });


//help general
client.on('message', message => {
    if (message.content === "#help-js-general") { 
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle('**⦁All types of codes in __Codes__ Server 💬⦁**')
    .addField('     **❧ #help-js-general-1  ➺ ⦁Ping Code** ','**════════════**')
    .addField('     **❧ #help-js-general-2 ➺ ⦁Roll Code** ','**════════════**')
    .addField('     **❧ #help-js-general-3 ➺ ⦁Avatar Code** ','**════════════**')
    .addField('     **❧ #help-js-general-4 ➺ ⦁Server info Code** ','**════════════**')
    .addField('     **❧ #help-js-general-5 ➺ ⦁ID Code** ','**════════════**')
    .setColor('#7d2dbe')
    message.channel.sendEmbed(embed);
    }
    });

//help js general 1
  client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-general-1') {
        message.author.send('  **⦁Ping Code  | ** https://pastebin.com/z127GTfi    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-general-1") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js general 2
  client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-general-2') {
        message.author.send('  **⦁Roll Code  | ** https://pastebin.com/t6wStpwP    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-general-2") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js general 3
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-general-3') {
        message.author.send('  **⦁Avatar Code  | ** https://pastebin.com/C9B1A2Z4    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-general-3") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js general 4
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-general-4') {
        message.author.send('  **⦁Server info Code  | ** https://pastebin.com/Cv8tehRe    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-general-4") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js general 5
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-general-5') {
        message.author.send('  **⦁ID Code  | ** https://pastebin.com/9p5hjKHr    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-general-5") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help welcome
client.on('message', message => {
    if (message.content === "#help-js-welcome") { 
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle('**⦁All types of codes in __Codes__ Server 💬⦁**')
    .addField('     **❧ #help-js-welcome-1  ➺ ⦁Welcome with a member number Code** ','**════════════**')
    .addField('     **❧ #help-js-welcome-2 ➺ ⦁Leave member with picture Code** ','**════════════**')
    .setColor('#7d2dbe')
    message.channel.sendEmbed(embed);
    }
    });
//help js welcome 1
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-welcome-1') {
        message.author.send('  **⦁Welcome with a member number Code  | ** https://pastebin.com/mm5MrNmP    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-welcome-1") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js welcome 2
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-welcome-2') {
        message.author.send('  **⦁Leave member with picture Code  | ** https://pastebin.com/A7peGwJd    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-welcome-2") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help help
client.on('message', message => {
    if (message.content === "#help-js-help") { 
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle('**⦁All types of codes in __Codes__ Server 💬⦁**')
    .addField('     **❧ #help-js-help-1   ➺ ⦁Help with the image in the same chat Code** ','**════════════**')
    .addField('     **❧ #help-js-help-2  ➺ ⦁Help send in private chat Code** ','**════════════**')
    .setColor('#7d2dbe')
    message.channel.sendEmbed(embed);
    }
    });
//help js help 1
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-help-1') {
        message.author.send('  **⦁Help with the image in the same chat Code  | ** https://pastebin.com/iXsw6mMM    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-help-1") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js help 2
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-help-2') {
        message.author.send('  **⦁Help send in private chat Code  | ** https://pastebin.com/9ZmwuSQM    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-help-2") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help bc
client.on('message', message => {
    if (message.content === "#help-js-bc") { 
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle('**⦁All types of codes in __Codes__ Server 💬⦁**')
    .addField('     **❧ #help-js-bc-1   ➺ ⦁Broadcast + All + Developed Code** ','**════════════**')
    .addField('     **❧ #help-js-bc-2  ➺ ⦁Broadcast + All + Not Developed Code** ','**════════════**')
    .addField('     **❧ #help-js-bc-3   ➺ ⦁Broadcast + for online only + With mention + Not Developed Code** ','**════════════**')
    .addField('     **❧ #help-js-bc-4  ➺ ⦁Brodcast + All + With Mention + Not Developed Code** ','**════════════**')
    .addField('     **❧ #help-js-bc-5  ➺ ⦁Brodcast + Role Code** ','**════════════**')
    
    .setColor('#7d2dbe')
    message.channel.sendEmbed(embed);
    }
    });
//help js bc 1
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-bc-1') {
        message.author.send('  **⦁Broadcast + All + Developed Code  | ** https://pastebin.com/SLQYFN0g    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-bc-1") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js bc 2
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-bc-2') {
        message.author.send('  **⦁Broadcast + All + Not Developed Code  | ** https://pastebin.com/uJg5BzT1    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-bc-2") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js bc 3
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-bc-3') {
        message.author.send('  **⦁Broadcast + for online only + With mention + Not Developed Code  | ** https://pastebin.com/jEmkjJrd    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-bc-3") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js bc 4
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-bc-4') {
        message.author.send('  **⦁Brodcast + All + With Mention + Not Developed Code  | ** https://pastebin.com/ygHw6vAr    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-bc-4") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js bc 5
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-bc-5') {
        message.author.send('  **⦁Brodcast + Role Code  | ** https://pastebin.com/3K0nZV8N    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-bc-5") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help admin
client.on('message', message => {
    if (message.content === "#help-js-admin") { 
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle('**⦁All types of codes in __Codes__ Server 💬⦁**')
    .addField('     **❧ #help-js-admin-1   ➺ ⦁Ban Code** ','**════════════**')
    .addField('     **❧ #help-js-admin-2  ➺ ⦁Kick Code** ','**════════════**')
    .addField('     **❧ #help-js-admin-3   ➺ ⦁Clear chat Code** ','**════════════**')
    .setColor('#7d2dbe')
    message.channel.sendEmbed(embed);
    }
    });
//help js admin 1
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-admin-1') {
        message.author.send('  **⦁Ban Code  | ** https://pastebin.com/tSDNVN97    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-admin-1") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js admin 2
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-admin-2') {
        message.author.send('  **⦁Kick Code  | ** https://pastebin.com/Y4Ad0yA2    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-admin-2") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//help js admin 3
client.on('message', message => {
    if (true) {
  if (message.content === '#help-js-admin-3') {
        message.author.send('  **⦁Clear chat Code  | ** https://pastebin.com/HWbJiEr7    ').catch(e => console.log(e.stack));
   
      }
     }
    });
   
   
  client.on('message', message => {
       if (message.content === "#help-js-admin-3") {
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField(" **Done :wink: ** " , "** The code has been sent in the private conversation :ok_hand:**")
       
       
       
    message.channel.sendEmbed(embed);
      }
  });
//achieve
const sql = require("sqlite");
client.on("message", async message => {
  var prefix = "#"
    if (message.content.startsWith(prefix + "achieve")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("Put something you want to achieve!");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});

//Count
client.on('guildMemberAdd', member => {
    member.guild.channels.get('483945437426876416').setName(`Total Users: ${member.guild.memberCount}`);
    let humans = member.guild.memberCount - member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('483945478019612680').setName(`Total Humans: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('483945930001743894').setName(`Total Bots: ${bots}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('483945437426876416').setName(`Total Users: ${member.guild.memberCount}`);
    let humans = member.guild.memberCount - member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('483945478019612680').setName(`Total Humans: ${humans}`);
    let bots = member.guild.members.filter(m => m.user.bot).size
    member.guild.channels.get('483945930001743894').setName(`Total Bots: ${bots}`);
});


//Auto Role
client.on('guildMemberAdd', (member) => {
    member.addRole(member.guild.roles.find('name', 'Member'));
    });






client.login(process.env.BOT_TOKEN);

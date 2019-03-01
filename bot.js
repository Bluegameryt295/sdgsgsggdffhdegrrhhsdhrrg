const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`#help-js`,"#تقديم")
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
    console.log('By : blue');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  }); 

lient.on("message",async msg => {
    var Alpha = '#';
    if(msg.content.startsWith(Alpha  + "تقديم")){
        var channel = msg.guild.channels.find("name", "Support Trail");
        if(!channel) return msg.reply("**لا اجد روم باْسم `التقديمات`**")
    let fltr = m => m.author.id === msg.author.id
    let name = '';
   await msg.reply('**اكتب اسمك الان**').then(e => {
msg.channel.awaitMessages(fltr, {
    time: 600000,
    max: 1
})
.then(co => {
    name = co.first().content
    co.first().delete()
    let john = '';
    e.edit(`**${msg.author} ما الفرق بين var , const ?**`).then(e => {
     msg.channel.awaitMessages(fltr, {
         time: 600000,
         max: 1
     })  
.then(co => {
    name = co.first().content
    co.first().delete()
    let tomah = '';
    e.edit(`**${msg.author} ما فائدة الجيسون ؟**`).then(e => {
     msg.channel.awaitMessages(fltr, {
         time: 600000,
         max: 1
     }) 
.then(co => {
    name = co.first().content
    co.first().delete()
    let muheeb = '';
    e.edit(`**${msg.author} هل رح تتفاعل وتنشر اكواد؟**`).then(e => {
     msg.channel.awaitMessages(fltr, {
         time: 600000,
         max: 1
     }) 
     .then(co => {
     age = co.first().content
     co.first().delete();
     let from = '';
     e.edit(`**${msg.author} اكتب سبب تقديمك**`).then(e => {
     msg.channel.awaitMessages(fltr, {
         time: 600000,
         max: 1
     })
     .then(co => {
      from = co.first().content
      co.first().delete();
      e.edit("**هل انت متأكد من التقديم ؟ | ✅ نعم | ❌ لا**").then(o => {
          o.react("❌")
          .then(() => o.react('✅'))
            .then(() =>o.react('❌'))
            let react1 = (reacton, user) => reacton.emoji.name === '✅' && user.id === msg.author.id
            let react2 = (reacton, user) => reacton.emoji.name === '❌' && user.id === msg.author.id
            let cr1 = o.createReactionCollector(react1, { time: 12000 });
            let cr2 = o.createReactionCollector(react2, { time: 12000 });
            cr2.on("collect", r => {
                msg.reply("**تم توقيف التقديم**").then(k => {
                    o.delete(2222);
                    k.delete(2222);
                 
                })
            })
            cr1.on("collect", r => {
                msg.reply("**تم التقديم بنجاح!**").then(b => {
                    o.delete(2222);
                    b.delete(2222);
                   let emb = new Discord.RichEmbed()
                   .setTitle("**تقديم للإدارة**")
                   .addField("**الاسم**", name)
                   .addField("**الفرق بين var , const**", john)
                   .addField("**فائدة الجيسون**", tomah)
                   .addField("**رح يتفاعل**", muheeb)
                   .addField("**سبب التقديم**", from)
                   .addField("**الحساب**", msg.author)
                   .addField("**ايدي الحساب**", msg.author.id)
                   .setThumbnail(msg.author.avatarURL)
                   channel.send(emb);
                })
               
            })
      })
     })
     })
     })
    })
})
   })
    }
})


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




//Auto Role
client.on('guildMemberAdd', (member) => {
    member.addRole(member.guild.roles.find('name', 'Member'));
    });


client.on('ready', function(){
    client.user.setStatus("online");
    var ms = 100000 ;
    var setGame = [`#js`,`#تقديم`,`#help-js`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/jojo`);
    }, ms);100000
 
});


client.on('message', message => {//mrx - dev
    if (message.content.startsWith(prefix + 'قبول')) {//mrx - dev
        if (message.author.bot) return;//mrx - dev
        if (!message.guild) return;//mrx - dev
        let Room = message.guild.channels.find(`name`, 'accept-deny');//mrx - dev
        let user = message.mentions.users.first();//mrx - dev
        let embedreject = new Discord.RichEmbed()//mrx - dev
        .setColor('RANDOM')//mrx - dev
        .setAuthor(user.username,user.avatarURL)//mrx - dev
        .setTitle('» [ :true: ] :: - `تم قبول العضو .`')//mrx - dev
        .setThumbnail(message.author.avatarURL)//mrx - dev
        Room.sendEmbed(embedreject);//mrx - dev
    }
});



client.on('message', message => {//mrx - dev
    if (message.content.startsWith(prefix + 'رفض')) {//mrx - dev
        if (message.author.bot) return;//mrx - dev
        if (!message.guild) return;//mrx - dev
        let Room = message.guild.channels.find(`name`, 'accept-deny');//mrx - dev
        let user = message.mentions.users.first();//mrx - dev
        let embedreject = new Discord.RichEmbed()//mrx - dev
        .setColor('RANDOM')//mrx - dev
        .setAuthor(user.username,user.avatarURL)//mrx - dev
        .setTitle('» [ :false: ] :: - `تم رفض العدو.`')//mrx - dev
        .setThumbnail(message.author.avatarURL)//mrx - dev
        Room.sendEmbed(embedreject);//mrx - dev
    }
});









client.login(process.env.BOT_TOKEN);

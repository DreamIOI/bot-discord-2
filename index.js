const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'p.help') {
    msg.reply('Im here\nStat formulas: http://toramonline.com/index.php?threads%2Fstat-formulas-130cap-completed.27335%2F\nSkill info: http://toramonline.com/index.php?threads/skill-tree-list-level-150.37578/\nAbout some interesting system such as monster info and stat calculator: http://coryn.club/\nFastest lvling ? : p.lvling x (x is your lv)\nAbout me ?: p.info\n-------------------------------------------------------------------------------');
  }
  if (msg.content === 'p.info') {
    msg.reply('Written by: MSR_2K\nMy first bot :)');
  }
  if (msg.content === 'Do you love me?')
  {
    msg.reply('Yes,of course <3');
  }
  if(msg.content.slice(0,8)==='p.lvling')
  {
    var op = msg.content.slice(9);
    var ov = Number(op);
    if(ov<=27)
    {
      msg.reply('[Normal Monster]Bone Dragonewt\nMap: Ancient Empress Tomb: Area 1')
    }
    if(ov>27&&ov<43)
    {
      msg.reply('[Quest]Timber Shortage 10,080 EXP, 30 pcs Nisel Wood/Quest\nSofya\nNPC: Yunis');
    }
    if(ov>42&&ov<51)
    {
      msg.reply('[Normal Monster]Bone Dragonewt\nMap: Ancient Empress Tomb: Area 1,3');
    }
    if(ov>50&&ov<56)
    {
      msg.reply('[Boss]Minotaur (Nightmare)\nMap: Ruined Temple: Forbidden hall');
    }
    if(ov>55&&ov<60)
    {
      msg.reply('[Boss]Forestia (Hard)\nMap: Land Of Chaos');
    }
    if(ov>59&&ov<65)
    {
      msg.reply('[Boss]Boss Roga (Normal)\nMap: Saham Underground Cave - Deepest Part');
    }
    if(ov>64&&ov<67)
    {
      msg.reply('[Boss]Masked Warrior (Normal)\nMap: Land Under Cultivation: Hill');
      msg.reply('Or [Boss]Boss Roga (Normal)\nMap: Saham Underground Cave - Deepest Part\nLess EXP than Masked Warrior');
    }
    if(ov>66&&ov<71)
    {
      msg.reply('[Boss]Forestia (Nightmare)\nMap: Land Of Chaos');
    }
    if(ov>70&&ov<75)
    {
      msg.reply('[Boss]Boss Roga (Hard)\nMap: Saham Underground Cave - Deepest Part');
    }
    if(ov>74&&ov<79)
    {
      msg.reply('[Boss]Masked Warrior (Hard)\nMap: Land Under Cultivation: Hill');
    }
    if(ov>78&&ov<85)
    {
      msg.reply('[Boss]Boss Roga (Nightmare)\nMap: Saham Underground Cave - Deepest Part');
    }
    if(ov>84&&ov<90)
    {
      msg.reply('[Boss]Masked Warrior (Nightmare)\nMap: Land Under Cultivation: Hill');
    }
    if(ov>89&&ov<96)
    {
      msg.reply('[Boss]Grass Dragon Yelb (Nightmare)\nMap: Albatif Village');
    }
    if(ov>95&&ov<100)
    {
      msg.reply('[Boss]Nurethoth (Nightmare)\nMap: Gate to Another World: Front');
    }
    if(ov>99&&ov<103)
    {
      msg.reply('[Boss]Goovua (Nightmare)\nMap: Akaku Desert: Hill');
    }
    if(ov>102&&ov<107)
    {
      msg.reply('[Mini Boss]Don Yeti\nMap: Polde Ice Valley');
    }
    if(ov>106&&ov<113)
    {
      msg.reply('[Boss]	Pillar Golem (Ultimate)\nMap: Lost Town: Magic Barrier');
    }
    if(ov>112&&ov<120)
    {
      msg.reply('[Boss]Nurethoth (Ultimate)\nMap: Gate to Another World: Front');
    }
    if(ov>119&&ov<123)
    {
      msg.reply('[Boss]Goovua (Ultimate)\nMap: Akaku Desert: Hill');
    }
    if(ov>122&&ov<128)
    {
      msg.reply('[Boss]Scrader (Ultimate)\nMap: Magic Waste Site: Deepest Part');
    }
    if(ov>127&&ov<132)
    {
      msg.reply('[Boss]Black Knight of Delusion (Ultimate)\nMap: Abyss of No Return: Deepest Area');
    }
    if(ov>131&&ov<137)
    {
      msg.reply('[Mini Boss]Evil Magic Sword\nMap: Singolare Ruins: 2nd Floor');
    }
    if(ov>136&&ov<141)
    {
      msg.reply('[Mini Boss]Builder Golem\nMap: Huge Crysta Factory: 3rd Floor');
    }
    if(ov>140&&ov<144)
    {
      msg.reply('[Mini Boss]Dusk Machina\nMap: Small Demi Machina Factory: Area 2');
    }
    if(ov>143&&ov<149)
    {
      msg.reply('[Mini Boss]Odelon Machina\nMap: Large Demi Machina Factory: Area 2');
    }
    if(ov>148&&ov<156)
    {
      msg.reply('[Boss]Ifrid (Ultimate)\nMap: Blazing Graben: Deepest Part');
    }
    if(ov>155&&ov<161)
    {
      msg.reply('[Boss]York (Ultimate)\nMap: Huge Crysta Factory: Storage');
    }
  }
  if(msg.content === 'Learn Skill: Combat')
  {
    msg.reply('\nLearn Skills: Weapon\nLearn Skills: Buff\nLearn Skills: Assist');
  }
  if(msg.content === 'Learn Skills: Weapon')
  {
    msg.reply('\nBlade Skills: p.Blade Skills\nShot Skills: p.Shot Skills\nMagic Skills: p.Magic Skills\nMartial Skills: p.Martial Skills\nDual Sword Skills: p.Dual Sword Skills\nHalberd Skills: p.Halberd Skills\nMononofu SKills: p.Mononofu SKills');
  }
  if(msg.content === 'p.t')
  {
    msg.channel.send({embed:{
      author: "Blade Skills",
      icon_url:"http://coryn.club/images/icon/s-blade.png",
      color: 0x1B8E89,
      fields:[
      {
        name: "Hard Hit",
        value: "p.blade 1 for more info",
      },
      {
        name: "Astutel",
        value: "p.blade 2 for more info",
      }
    ]
    }})
  }
});

client.login(process.env.BOT_TOKEN);

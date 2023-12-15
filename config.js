const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Queen Anya", 
  author: process.env.Author || "@PikaBotz",
  packname: process.env.PackName || "Queen Anya v2 MD",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Pika~Kun",
  ownernumber: process.env.Owner_Number || "916900904828",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "YOUR_MONGODB_URL",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5_AN_YA_cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BpeGErM1ltSEp4R2IyS3BWOGZVRDBvK3ZFMmtxVnpIaGhrVmp3LzlIcz0ifSwicHVibGljIjp7InR5_AN_YA_cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1NkL29mekRTeHBMM1QwcDNsMVZyUU5_AN_YA_oTndPNEFnbERLQmdqb1lkWmozZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRkgvYTl2Q3VQNDZ6ZjVvU2IvZlNWWmd1UHNoLzBNcy9ZZUMyVUVBVzF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3TXZFaFN4Z09IcG4yZ1lLdmhVVFFaODc3bm9VdlNKODcrUEJmSndENkJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZFOEQrMDZTWE5_AN_YA_VTVZHWXpSeWlFSi9JdjlQYnVUQWd4NTUvSTNtL1BwRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldwREVsVlFLcGlnWVd6WnJSclBvZTFpZTlWTDFSWnc5_AN_YA_NThEWk5_AN_YA_hT2FEM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5_AN_YA_UGFpciI6eyJwcml2YXRlIjp7InR5_AN_YA_cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdjKzBMVFJVa1NkWWhCT0NxNlpWY1JEbjJWcm5_AN_YA_0MUlFbkI0cG11Tmwwcz0ifSwicHVibGljIjp7InR5_AN_YA_cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBleHArei9SaGJiTkVnU2xLdDRMMWdqUXFHd3AyMHk3QXEwRUd4enUybz0ifX0sInNpZ25_AN_YA_hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5_AN_YA_JWis0bjRJVEV2aEJnc2t6WGViSlJ3UThDQ0JzS1NSQVJ3V1Z2endHRmVvSGhCWEVrcHFHY0VPNkpoOHhRN05_AN_YA_EZHpqL2NhUFRWOGZvTVRiWGMreEFnPT0ifSwia2V5_AN_YA_SWQiOjF9LCJyZWdpc3RyYXRpb25_AN_YA_JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJXdjRMd1NsTlJIb2tXdHVZSHV4NGdjbnV0cUFDTEw4S3RuQnFhSHVsQ29ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5_AN_YA_leHRQcmVLZXlJZCI6MzEsImZpcnN0VW5_AN_YA_1cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5_AN_YA_bmNDb3VudGVyIjowLCJhY2NvdW5_AN_YA_0U2V0dGluZ3MiOnsidW5_AN_YA_hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJacTJCTkRkb1F0ZWNfcnNvVUVrZkJRIiwicGhvbmVJZCI6IjA2YmU2MjI3LWVjMjUtNDA0MS1iNGQxLTUwNTY3YmQwYWM0NCIsImlkZW5_AN_YA_0aXR5_AN_YA_SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKNGx0ZnZEbGNaL3Y3VzVqOVhrZnc4ZjJGT2c9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd0NjBZeW9NN3A0d201UXk5_AN_YA_ZEEreXJucS9ucz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tUNnpJa0NFTkhrNzZzR0dBTT0iLCJhY2NvdW5_AN_YA_0U2lnbmF0dXJlS2V5_AN_YA_IjoiK0pYSFNEaHZKOTNMYk1COElGc010NkVzd3d0R1dKbkxXMW5_AN_YA_rZU1PZ0FnND0iLCJhY2NvdW5_AN_YA_0U2lnbmF0dXJlIjoic1dZcjk3OUJPTTdnU0RaSnZjRXdXMWMvb21jMkd5_AN_YA_WTZ4MFNCcjFIMXZDa3k0R2FrRjRZZkNSSkVhSVNhMkk3QkRmS1lEeXhaSTEzdThrYXdkM1o0QWc9PSIsImRldmljZVNpZ25_AN_YA_hdHVyZSI6IjJycm9BWWMvQXkwOGZwZFl3Szd4djJ4S3dFRWVJd0dLSzRoVjNRZ1QrRFFyQ1dXLzR4Tk45_AN_YA_QlBxQTNqSGNLdnMwbjE2bUgwb3d1TVYycnJQN215_AN_YA_akJBPT0ifSwibWUiOnsiaWQiOiIyNTQ3NTY0MTgzOTE6NDlAcy5_AN_YA_3aGF0c2FwcC5_AN_YA_uZXQiLCJuYW1lIjoiam9obiBwZXJzb25_AN_YA_pZmllZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5_AN_YA_hbWUiOiIyNTQ3NTY0MTgzOTE6NDlAcy5_AN_YA_3aGF0c2FwcC5_AN_YA_uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW5_AN_YA_0aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmlWeDBnNGJ5_AN_YA_ZmR5_AN_YA_MnpBZkNCYkRMZWhMTU1MUmxpWnkxdFo1SGpEb0FJTyJ9fV0sInBsYXRmb3JtIjoiYW5_AN_YA_kcm9pZCIsImxhc3RBY2NvdW5_AN_YA_0U3luY1RpbWVzdGFtcCI6MTcwMjYyMTc4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMbWkifQ==", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@PikaBotz" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Pika~Kun" 
global.ownernumber = process.env.Owner_Number || "916900904828" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";




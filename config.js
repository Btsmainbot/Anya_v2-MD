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
    ban: `poes You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "ℕ𝔸𝔹-𝔹𝕠𝕥", 
  author: process.env.Author || "𝑵𝑨𝑩𝒘𝒐𝒓𝒌𝒔",
  packname: process.env.PackName || "ℕ𝔸𝔹-𝔹𝕠𝕥",
  socialLink: process.env.Web || "https://youtube.com/@nabgains",
  footer: process.env.Footer || "©ℕ𝔸𝔹-𝔹𝕠𝕥",
  prefa: process.env.Prefix || ['>'],
  themeemoji: process.env.ThemeEmoji || "🐦",
  ownername: process.env.Owner_Name || "𝑵𝑨𝑩𝒘𝒐𝒓𝒌𝒔",
  ownernumber: process.env.Owner_Number || "27799191911",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://btsmainbot:<password>@nabbot.d94tnlh.mongodb.net/?retryWrites=true&w=majority",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI_AN_YA_6eyJwcml2YXRlI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joiU0ZZRFVzWGpHVGhBV1pHUkdEdFNWY0x5SmRZblRYaUhMeTI_AN_YA_1alhaK0NI_AN_YA_RT0ifSwicHVibGljI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joicTZvdkxzeWR4WFRuOWlCVkNTV1d5czBhUFlFSTFKKzg3V08yVUMyQU9Vbz0ifX0sI_AN_YA_nBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyI_AN_YA_jp7I_AN_YA_nByaXZhdGUiOnsidHlwZSI_AN_YA_6I_AN_YA_kJ1ZmZlciI_AN_YA_sI_AN_YA_mRhdGEiOiJ5Skora2Zqdk44OVRiNUJndi9aT3hZekI_AN_YA_2QStCbzNNYkFxbFVqeDlI_AN_YA_N2tNPSJ9LCJwdWJsaWMiOnsidHlwZSI_AN_YA_6I_AN_YA_kJ1ZmZlciI_AN_YA_sI_AN_YA_mRhdGEiOiJGWHFYZkYrVzdZRHR0L045Q2NsMEQ1a2RrTTZYV3ZYSGtiRzlOWVJZL0JjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_llMczQ5dVh5WVh4NmxEeEJLMHZSVVpsMU1scHpFT3NvRlloV25PQ2VoR0E9I_AN_YA_n0sI_AN_YA_nB1YmxpYyI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_mI_AN_YA_5VTF1a2gxVXBtZEdlNFZHR3A5RGlxRzhnbHJtQjI_AN_YA_xeHJBcWJUd1A5eWM9I_AN_YA_n19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI_AN_YA_6eyJwcml2YXRlI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joia0QwYkUxeFdidStRZlBRN3JmeS9QNkpsZlJBUWJnWE43dGg1NHMyWWMzRT0ifSwicHVibGljI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joiY3VYbmRpTU1obUlDTFM1K1V0empiK1ZnV1lUeWc4WnJab1FoUEFEZ1UzVT0ifX0sI_AN_YA_nNpZ25hdHVyZSI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_lY4ZENQM2p2RjhyWGtuclpQQURnaFdOblFObW1JZkFWRndpZjd5em5I_AN_YA_QU1I_AN_YA_RldiS3FXd0ozT0Q2LzJLT2NVWXdyRjR6WWV2WVRzY3ZabXo0NXRsdUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI_AN_YA_6MTgsI_AN_YA_mFkdlNlY3JldEtleSI_AN_YA_6I_AN_YA_mgvb0JxQTZvYVU1MFk1V0lkVkxwdTR2VUxFZFhsZTdqYXQrcVozUGdkU0k9I_AN_YA_iwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzI_AN_YA_jpbeyJrZXkiOnsicmVtb3RlSmlkI_AN_YA_joiNjI_AN_YA_4NzgxNzEzMDU1N0BzLndoYXRzYXBwLm5ldCI_AN_YA_sI_AN_YA_mZyb21NZSI_AN_YA_6dHJ1ZSwiaWQiOiI_AN_YA_wM0REQzMzODFDRkU1QzBFOTFFREQ1REExREMyMDJBRiJ9LCJtZXNzYWdlVGltZXN0YW1wI_AN_YA_joxNzAzMDM1Njk0fSx7I_AN_YA_mtleSI_AN_YA_6eyJyZW1vdGVKaWQiOiI_AN_YA_2Mjg3ODE3MTMwNTU3QHMud2hhdHNhcHAubmV0I_AN_YA_iwiZnJvbU1lI_AN_YA_jp0cnVlLCJpZCI_AN_YA_6I_AN_YA_kVDNDk2MDhCNURCQjY0Q0YyQkZBOTEyQjcxMUQyRjY1I_AN_YA_n0sI_AN_YA_m1lc3NhZ2VUaW1lc3RhbXAiOjE3MDMwMzU2OTR9XSwibmV4dFByZUtleUlkI_AN_YA_jozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXI_AN_YA_iOjEsI_AN_YA_mFjY291bnRTZXR0aW5ncyI_AN_YA_6eyJ1bmFyY2hpdmVDaGF0cyI_AN_YA_6ZmFsc2V9LCJkZXZpY2VJZCI_AN_YA_6I_AN_YA_mdUZ25vQy14VHB5Y0RSNVQyS2c3emciLCJwaG9uZUlkI_AN_YA_joiYTJiMTlmYzI_AN_YA_tMjhlZS00NDk2LTllMmQtMzMzNGUzMTFhZTQxI_AN_YA_iwiaWRlbnRpdHlJZCI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_lBoSExudENyVTlwdWpZd2FqcGpOZ241R29qbz0ifSwicmVnaXN0ZXJlZCI_AN_YA_6ZmFsc2UsI_AN_YA_mJhY2t1cFRva2VuI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joic3QrRDFZQjhNUTMvYXQrUjN3WjZmRSszYU5RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50I_AN_YA_jp7I_AN_YA_mRldGFpbHMiOiJDSStHck8wSEVLbUdpYXdHR0FJPSI_AN_YA_sI_AN_YA_mFjY291bnRTaWduYXR1cmVLZXkiOiJaZDhwSHVEK2YvbzdYSUw0SDRkN3VONGJoNmFMbFBoVm5KeG5vZERKZUZvPSI_AN_YA_sI_AN_YA_mFjY291bnRTaWduYXR1cmUiOiI_AN_YA_3NEx5RW5uYjRFa1pHK2ozTmNHcFlNL3M5UHVFREZTekVI_AN_YA_S05rLzZ1eFdCMFFoZzYvc3ZxT2V5c3hNUkk3aFI_AN_YA_wNzA4NndDMDI_AN_YA_1YUkwK2VhSCtRK1pCQT09I_AN_YA_iwiZGV2aWNlU2lnbmF0dXJlI_AN_YA_joia0gzT3JPUjBUSmx0NlYrTVkzNEJFU3lkaytvMnFZV2NPL2oyaDErOExkbEs3YU1DbVZVUVdLZEs5V0ZkWnBlK3ptRlNYd1Bwck1nbUF5RDhpcFhDQnc9PSJ9LCJtZSI_AN_YA_6eyJpZCI_AN_YA_6I_AN_YA_jYyODc4MTcxMzA1NTc6NUBzLndoYXRzYXBwLm5ldCI_AN_YA_sI_AN_YA_m5hbWUiOiJuYWI_AN_YA_tYm90I_AN_YA_n0sI_AN_YA_nNpZ25hbElkZW50aXRpZXMiOlt7I_AN_YA_mlkZW50aWZpZXI_AN_YA_iOnsibmFtZSI_AN_YA_6I_AN_YA_jYyODc4MTcxMzA1NTc6NUBzLndoYXRzYXBwLm5ldCI_AN_YA_sI_AN_YA_mRldmljZUlkI_AN_YA_jowfSwiaWRlbnRpZmllcktleSI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_kJXWGZLUjdnL24vNk8xeUMrQitI_AN_YA_ZTdqZUc0ZW1pNVQ0Vlp5Y1o2SFF5WGhhI_AN_YA_n19XSwicGxhdGZvcm0iOiJzbWJhI_AN_YA_iwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wI_AN_YA_joxNzAzMDM1NjkyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNwTCJ9", 
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
global.botname = process.env.BotName || "ℕ𝔸𝔹-𝔹𝕠𝕥" 
global.author = process.env.Author || "𝑵𝑨𝑩𝒘𝒐𝒓𝒌𝒔" 
global.packname = process.env.PackName || "ℕ𝔸𝔹-𝔹𝕠𝕥" 
global.myweb = process.env.Web || "https://youtube.com/@nabgains" 
global.footer = process.env.Footer || "©ℕ𝔸𝔹-𝔹𝕠𝕥" 
global.prefa = process.env.Prefix || ['>'] 
global.themeemoji = process.env.ThemeEmoji || "🐦" 
global.ownername = process.env.Owner_Name || "𝑵𝑨𝑩𝒘𝒐𝒓𝒌𝒔" 
global.ownernumber = process.env.Owner_Number || "27799191911" 
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


module.exports = {
 config: {
         name: "prefix",
         version: "1.0",
         author: "Tokodori_Frtiz",//remodified by cliff
         countDown: 5,
         role: 0,
         shortDescription: "no prefix",
         longDescription: "no prefix",
         category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█

░██████╗██╗░██████╗██╗
██╔════╝██║██╔════╝██║
╚█████╗░██║╚█████╗░██║
░╚═══██╗██║░╚═══██╗██║
██████╔╝██║██████╔╝██║
╚═════╝░╚═╝╚═════╝░╚═╝

 🦩^ ⑅ ^ 🎉°• 〘🐰〙𝗦𝗜𝗦𝗜 𝗔𝗜 '🌷ノ
  (๑•ᴗ•๑)つ  𝙲𝚁𝙴𝙰𝚃𝙾𝚁 : 𝗬𝗢𝗬𝗔 | 𝗔𝗬𝗠𝗜 ⪩⪨
━‌۫∪━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫━‌۫❖
==『🍥𝗕𝗢𝗧 𝗦𝗨𝗠𝗠𝗔𝗥𝗬 𝗜𝗡𝗙𝗢🐰』==

〘🐰〙► 𝚃𝙷𝙸𝚂 𝙸𝚂 𝙼𝚈 𝙿𝚁𝙴𝙵𝙸𝚇 𝙻𝙾𝚅𝙴 ﹝ . ﹞
〘🐰〙► 𝚃𝚈𝙿𝙴 ﹝ .𝚑𝚎𝚕𝚙 ﹞ 𝚃𝙾 𝚂𝙴𝙴 𝙼𝚈 𝙲𝙼𝙳𝚂
〘🐰〙► 𝙿𝙻𝙴𝙰𝚂𝙴 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃 𝚆𝙸𝚃𝙷 𝙼𝙴 
        𝙼𝙾𝙳𝙴𝚁𝙰𝚃𝙴𝙻𝚈 𝚃𝙾 𝙿𝚁𝙴𝚅𝙴𝙽𝚃 𝙾𝙵𝙵𝙻𝙸𝙽𝙴.
▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱`,
 });
 }
 }
}
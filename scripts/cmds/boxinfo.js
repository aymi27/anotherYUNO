const fs = require("fs-extra");
const request = require("request");

module.exports = {
config: {
    name: "boxinfo",
    aliases: ['boxinfo'],
    version: "1.0",
    author: "xemon",
    countDown: 5,
    role: 0,
    shortDescription: "See Box info",
    longDescription: "",
    category: "box chat",
    guide: {
      en: "{p} [groupinfo|boxinfo]",
    }
  },

 onStart: async function ({ api, event, args }) {
  let threadInfo = await api.getThreadInfo(event.threadID);
  var memLength = threadInfo.participantIDs.length;
  let threadMem = threadInfo.participantIDs.length;
  var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
  var nam = gendernam.length;
    var nu = gendernu.length;
   var listad = '';
   var qtv2 = threadInfo.adminIDs;
  let qtv = threadInfo.adminIDs.length;
  let sl = threadInfo.messageCount;
  let u = threadInfo.nicknames;
  let icon = threadInfo.emoji;
  let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
   for (let i = 0; i < qtv2.length; i++) {
const infu = (await api.getUserInfo(qtv2[i].id));
const name = infu[qtv2[i].id].name;
    listad += '•' + name + '\n';
  }
  let sex = threadInfo.approvalMode;
      var pd = sex == false ? 'Turned off' : sex == true ? 'Turned on' : 'Kh';
      var callback = () =>
        api.sendMessage(
          {
            body: `🐇﹝ 𝙶𝙲 𝙽𝙰𝙼𝙴 ﹞:${threadName}\n🐇﹝ 𝐆𝐫𝐨𝐮𝐩 𝐈𝐃 ﹞: ${id}\n🐇﹝ 𝙰𝙿𝙿𝚁𝙾𝚅𝙰𝙻 ﹞: ${pd}\n🐇﹝ 𝙴𝙼𝙾𝙹𝙸 ﹞: ${icon}\n🐇 ﹝ 𝙸𝙽𝙵𝙾 ﹞: 𝚒𝚗𝚌𝚕𝚞𝚍𝚒𝚗𝚐 ${threadMem} 𝙼𝚎𝚖𝚋𝚎𝚛𝚜\n🐇 ﹝ 𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝙼𝙰𝙻𝙴𝚂 ﹞: ${nam}\n🐇 ﹝ 𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝙵𝙴𝙼𝙰𝙻𝙴𝚂 ﹞ :  ${nu}\n🐇 ﹝ 𝚃𝙾𝚃𝙰𝙻 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝚃𝙾𝚁𝚂 ﹞: ${qtv} \n ► 𝙸𝚗𝚕𝚌𝚞𝚍𝚎 :\n${listad}\n🐇 ﹝ 𝚃𝙾𝚃𝙰𝙻 𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝙼𝙴𝚂𝚂𝙰𝙶𝙴𝚂 ﹞ : ${sl} msgs.:`,
            attachment: fs.createReadStream(__dirname + '/cache/1.png')
          },
          event.threadID,
          () => fs.unlinkSync(__dirname + '/cache/1.png'),
          event.messageID
        );
      return request(encodeURI(`${threadInfo.imageSrc}`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
 }
};
const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "﹝🐇 | SISI AI ﹞"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
        config: {
                name: "help",
                version: "1.17",
                author: "NTKhang", // original author Kshitiz 
                countDown: 5,
                role: 0,
                shortDescription: {
                        en: "View command usage and list all commands directly",
                },
                longDescription: {
                        en: "View command usage and list all commands directly",
                },
                category: "info",
                guide: {
                        en: "{pn} / help cmdName ",
                },
                priority: 1,
        },

        onStart: async function ({ message, args, event, threadsData, role }) {
                const { threadID } = event;
                const threadData = await threadsData.get(threadID);
                const prefix = false(threadID);

                if (args.length === 0) {
                        const categories = {};
                        let msg = "";

                        msg += `──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█\n\n░██████╗██╗░██████╗██╗\n██╔════╝██║██╔════╝██║\n╚█████╗░██║╚█████╗░██║\n░╚═══██╗██║░╚═══██╗██║\n██████╔╝██║██████╔╝██║\n╚═════╝░╚═╝╚═════╝░╚═╝\n\n﹝ 🐰| 𝗦𝗜𝗦𝗜 𝗔𝗜 ﹞`; // replace with your name 

                        for (const [name, value] of commands) {
                                if (value.config.role > 1 && role < value.config.role) continue;

                                const category = value.config.category || "𝚄𝙽𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝙸𝚉𝙴𝙳";
                                categories[category] = categories[category] || { commands: [] };
                                categories[category].commands.push(name);
                        }

                        Object.keys(categories).forEach((category) => {
                                if (category !== "info") {
                                        msg += `\n╭───────────🎀\n│ 〘 ✨🍥${category.toUpperCase()}🍥✨ 〙`;


                                        const names = categories[category].commands.sort();
                                        for (let i = 0; i < names.length; i += 3) {
                                                const cmds = names.slice(i, i + 3).map((item) => `﹝🐰﹞${item}`);
                                                msg += `\n│ ${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
                                        }

                                        msg += `\n╰────────────﹝🐰﹞`;
                                }
                        });

                        const totalCommands = commands.size;
                        msg += `\n﹝🐰﹞► 𝚑𝚎𝚗𝚕𝚘𝚘! 𝚝𝚑𝚒𝚜 𝚒𝚜 𝚂𝙸𝚂𝙸 𝙰𝙸 𝚝𝚑𝚎 𝚌𝚞𝚝𝚒𝚙𝚒𝚎 𝚋𝚘𝚝 𝚘𝚏 𝚖𝚢 𝙼𝙰𝚂𝚃𝙴𝚁 𝚈𝙾𝚈𝙰 | 𝙰𝚈𝙼𝙸, 𝚒 𝚑𝚊𝚟𝚎 𝚌𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 ${totalCommands} 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚝𝚑𝚊𝚝 𝚌𝚊𝚗 𝚋𝚎 𝚞𝚜𝚎𝚍!😽\n`;
                        msg += `﹝🐰﹞► 𝚝𝚢𝚙𝚎 ${prefix} 𝚑𝚎𝚕𝚙 𝚌𝚖𝚍𝙽𝚊𝚖𝚎 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚍𝚎𝚝𝚊𝚒𝚕𝚜 𝚘𝚏 𝚌𝚘𝚖𝚖𝚊𝚗𝚍! \n\n`;
                        msg += `░██████╗██╗░██████╗██╗\n██╔════╝██║██╔════╝██║\n╚█████╗░██║╚█████╗░██║\n░╚═══██╗██║░╚═══██╗██║\n██████╔╝██║██████╔╝██║\n╚═════╝░╚═╝╚═════╝░╚═╝`; // its not decoy so change it if you want 

                        const helpListImages = [
                                'https://i.imgur.com/xyDcrW3.jpeg',

                                'https://i.imgur.com/wdZLWTU.jpeg',

                                'https://i.imgur.com/cJksczg.jpeg',

                                'https://i.imgur.com/URCFjrS.jpeg',

                                'https://i.imgur.com/iAHVc1a.jpeg',
                                                                                                        'https://i.imgur.com/OSWG34k.jpeg',

                                'https://i.imgur.com/sTHeaMB.jpeg',

                                'https://i.imgur.com/6zzEoxf.jpeg',

                                'https://i.imgur.com/rDsUmFW.jpeg',

                                'https://i.imgur.com/Ew37GbZ.jpeg',

                                'https://i.imgur.com/QXnv0P8.jpeg',                                    
                                'https://i.imgur.com/f755v5B.jpeg', 

                                'https://i.imgur.com/7g5AKgh.jpeg',
                        ];

                        const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];

                        await message.reply({
                                body: msg,
                                attachment: await global.utils.getStreamFromURL(helpListImage),
                        });
                } else {
                        const commandName = args[0].toLowerCase();
                        const command = commands.get(commandName) || commands.get(aliases.get(commandName));

                        if (!command) {
                                await message.reply(`Command "${commandName}" not found.`);
                        } else {
                                const configCommand = command.config;
                                const roleText = roleTextToString(configCommand.role);
                                const author = configCommand.author || "Unknown";

                                const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

                                const guideBody = configCommand.guide?.en || "No guide available.";
                                const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

                                const response = `╭── ﹝ 🐰𝗡𝗔𝗠𝗘🐰 ────﹝🐰﹞
        │ ${configCommand.name}
        ├── ﹝ 𝗜𝗡𝗙𝗢 ﹞►🐇
        │ Description: ${longDescription}
        │ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"}
        │ Other names in your group: Do not have
        │ Version: ${configCommand.version || "1.0"}
        │ Role: ${roleText}
        │ Time per command: ${configCommand.countDown || 1}s
        │ Author: ${author}
        ├── ﹝ 𝗨𝗦𝗔𝗚𝗘 ﹞►🐇
        │ ${usage}
        ├── ﹝ 𝗡𝗢𝗧𝗘𝗦 ﹞►🐇
        │ The content inside <XXXXX> can be changed
        │ The content inside [a|b|c] is a or b or c
        ╰━━━━━━━﹝🐰﹞`;

                                await message.reply(response);
                        }
                }
        },
};

function roleTextToString(roleText) {
        switch (roleText) {
                case 0:
                        return "0 (All users)";
                case 1:
                        return "1 (Group administrators)";
                case 2:
                        return "2 (Admin bot)";
                default:
                        return "Unknown role";
        }
}
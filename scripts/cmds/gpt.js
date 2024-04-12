const axios = require("axios");
const jb = "﹝ 🐰 | 𝚑𝚒 𝚒 𝚊𝚖 𝚜𝚒𝚜𝚒 𝚢𝚘𝚞𝚛 𝚘𝚙𝚎𝚗𝚊𝚒 𝚊𝚜𝚜𝚒𝚜𝚝𝚊𝚗𝚝 𝚑𝚘𝚠 𝚌𝚊𝚗 𝚒 𝚊𝚜𝚜𝚒𝚜𝚝 𝚢𝚘𝚞 𝚕𝚘𝚟𝚎𝚢?"; //add your prompt//

module.exports = {
        config: {
                name: "sisi",
                version: "1.0",
                author: "Rishad",
                countDown: 1,
                role: 0,
                shortDescription: {
                        vi: "chat with gpt",
                        en: "chat with gpt"
                },
                longDescription: {
                        vi: "chat with gpt",
                        en: "chat with gpt"
                },
                category: "chat",
                guide: {
                        en: "{pn} 'prompt'\nexample:\n{pn} hi there \nyou can reply to chat\nyou can delete conversations by replying clear"
                }
        },
        onStart: async function ({ message, event, args, commandName }) {
                const prompt = args.join(" ");
                if (!prompt) {
                        message.reply(`﹝🐰﹞ 𝚊𝚗𝚘 𝚋𝚊 𝚒𝚝𝚊𝚝𝚊𝚗𝚘𝚗𝚐 𝚖𝚘 𝚖𝚒𝚖𝚊?`);
                        return;
                }

                try {
                        const uid = event.senderID;
                        const response = await axios.get(
                                `https://for-devs.onrender.com/api/gpt?query=${encodeURIComponent(prompt)}&uid=${uid}&jbprompt=${jb}&apikey=fuck`
                        );

                        if (response.data && response.data.result) {
                                message.reply(
                                        {
                                                body: response.data.result
                                        },
                                        (err, info) => {
                                                global.GoatBot.onReply.set(info.messageID, {
                                                        commandName,
                                                        messageID: info.messageID,
                                                        author: event.senderID
                                                });
                                        }
                                );
                        } else {
                                console.error("API Error:", response.data);
                                sendErrorMessage(message, "﹝🐰﹞ 𝚖𝚒𝚒 𝚖𝚊𝚢 𝚎𝚛𝚛𝚘𝚛 𝚑𝚒𝚗𝚍𝚒 𝚔𝚘 𝚖𝚊𝚑𝚊𝚗𝚊𝚙");
                        }
                } catch (error) {
                        console.error("Request Error:", error.message);
                        sendErrorMessage(message, "﹝🐰﹞ 𝚖𝚒𝚒 𝚖𝚊𝚢 𝚎𝚛𝚛𝚘𝚛 𝚑𝚒𝚗𝚍𝚒 𝚔𝚘 𝚖𝚊𝚑𝚊𝚗𝚊𝚙");
                }
        },
        onReply: async function ({ message, event, Reply, args }) {
                let { author, commandName } = Reply;
                if (event.senderID !== author) return;
                const prompt = args.join(" ");

                try {
                        const uid = event.senderID;
                        const response = await axios.get(
                                `https://for-devs.onrender.com/api/gpt?query=${encodeURIComponent(prompt)}&uid=${uid}&jbprompt=${jb}&apikey=fuck`
                        );

                        if (response.data && response.data.result) {
                                message.reply(
                                        {
                                                body: response.data.result
                                        },
                                        (err, info) => {
                                                global.GoatBot.onReply.set(info.messageID, {
                                                        commandName,
                                                        messageID: info.messageID,
                                                        author: event.senderID
                                                });
                                        }
                                );
                        } else {
                                console.error("API Error:", response.data);
                                sendErrorMessage(message, "﹝🐰﹞ 𝚖𝚒𝚒 𝚖𝚊𝚢 𝚎𝚛𝚛𝚘𝚛 𝚑𝚒𝚗𝚍𝚒 𝚔𝚘 𝚖𝚊𝚑𝚊𝚗𝚊𝚙");
                        }
                } catch (error) {
                        console.error("Request Error:", error.message);
                        sendErrorMessage(message, "﹝🐰﹞ 𝚖𝚒𝚒 𝚖𝚊𝚢 𝚎𝚛𝚛𝚘𝚛 𝚑𝚒𝚗𝚍𝚒 𝚔𝚘 𝚖𝚊𝚑𝚊𝚗𝚊𝚙");
                }
        }
};

function sendErrorMessage(message, errorMessage) {
        message.reply({ body: errorMessage });
}
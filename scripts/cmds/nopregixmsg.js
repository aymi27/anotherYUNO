module.exports = {
                config: {
                                name: "noprefixmsg1",
                                version: "1.0",
                                author: "Loid Butter",
                                countDown: 1,
                                role: 0,
                                category: "No Prefix",
                },
                onReply: async function ({ event, message }) {
                                const triggerPhrases = ["Ai", "hello", "sisiai", "bot"];
                                if (event.body && triggerPhrases.includes(event.body.toLowerCase())) {
                                                return () => {
                                                                return message.reply("﹝🐰﹞►𝚑𝚎𝚕𝚕𝚘 𝚑𝚘𝚘𝚖𝚊𝚗 𝚑𝚘𝚠 𝚌𝚊𝚗 𝚒 𝚑𝚎𝚕𝚙 𝚢𝚘𝚞? 𝚖𝚊𝚐𝚝𝚊𝚗𝚘𝚗𝚐 𝚔𝚊𝚕𝚊𝚗𝚐 𝚜𝚊𝚔𝚒𝚗 𝚜𝚊𝚜𝚊𝚐𝚞𝚝𝚒𝚗 𝚔𝚒𝚝𝚊 𝚝𝚊𝚢𝚘 𝚗𝚊 𝚊𝚐𝚊𝚍 𝚎𝚖𝚎 𝙷𝙰𝙷𝙰 𝚊𝚗𝚢𝚠𝚊𝚢𝚜 : \n\n ﹝🐰﹞► 𝚙𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎 [ .𝚑𝚎𝚕𝚙 ] 𝚝𝚘 𝚜𝚎𝚎 𝚖𝚢 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚖𝚠𝚊𝚑! 😽");
                                                }
                                }
                },

                onStart: async function ({  }) {
                }
};
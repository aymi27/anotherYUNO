const axios = require("axios");
module.exports = {
	config: {
		name: 'yuno',
		version: '2.1.0',
		author: 'KENLIEPLAYS',
		countDown: 5,
		role: 0,
		shortDescription: 'AI by Kenlie Navacilla Jugarap',
		longDescription: {
			en: 'AI by Kenlie Navacilla Jugarap'
		},
		category: 'ai',
		guide: {
			en: '   {pn} <word>: ask with AI'
				+ '\n   Example:{pn} hi'
		}
	},

	langs: {
		en: {
			chatting: 'Wait lang honey hanapan kita ng sagot...',
			error: 'Pasensya na honey may error eh wala akong mahanap na sagot'
		}
	},

	onStart: async function ({ args, message, event, getLang }) {
		if (args[0]) {
			const yourMessage = args.join(" ");
			try {
				const responseMessage = await getMessage(yourMessage);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				console.log(err)
				return message.reply(getLang("error"));
			}
		}
	},

	onChat: async ({ args, message, threadsData, event, isUserCallCommand, getLang }) => {
		if (!isUserCallCommand) {
			return;
		}
		if (args.length > 1) {
			try {
				const langCode = await threadsData.get(event.threadID, "settings.lang") || global.GoatBot.config.language;
				const responseMessage = await getMessage(args.join(" "), langCode);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				return message.reply(getLang("error"));
			}
		}
	}
};


		return res.data.response;
	} catch (err) {
		console.error('Error honey, ano ulit yun?:', err);
		throw err;
	}
}

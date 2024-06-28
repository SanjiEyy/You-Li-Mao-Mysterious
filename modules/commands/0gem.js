module.exports.config = {
    name: "gem",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Deku",
    description: "Talk to sim",
    commandCategory: "...",
    usages: "[ask]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
const { threadID, messageID } = event;
const b = require("axios");
let a = args.join(" ");
if (!a) return api.sendMessage("Wrong format", threadID, messageID);
const res = await b.get(`https://nash-rest-api.replit.app/gemini?prompt=${a}`);
var ans = res.data.respond
api.sendMessage(ans, threadID, messageID)
}
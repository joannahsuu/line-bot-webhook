const linebot = require('linebot')
// 使用 config
require('dotenv').config()

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.ACCESS_TOKEN,
})

module.exports = bot

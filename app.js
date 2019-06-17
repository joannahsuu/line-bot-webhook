// 引用linebot SDK
var linebot = require('linebot')
// 使用 config
require('dotenv').config()

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.ACCESS_TOKEN,
})

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // console.log('======= messagee - event ========', event)
  // const { userId } = event.source
  // console.log('userId', userId)
  // event.message.text是使用者傳給bot的訊息
  let replyMsg = `Aloha~
你剛剛輸入的是：${event.message.text}`

  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
    console.log(error)
  })
})

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', process.env.PORT || 3000, function () {
  console.log('[BOT IS READY..]')
})
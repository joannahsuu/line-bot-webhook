const bot = require('./config')

// 當有人傳送訊息給Bot時
bot.on('message', (event) => {
  const { text } = event.message
  const carousel = {
    "type": "template",
    "altText": "this is a image carousel template",
    "template": {
        "type": "image_carousel",
        "columns": [
            {
              "imageUrl": "https://images.pexels.com/photos/1058058/pexels-photo-1058058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "action": {
                "type": "message",
                "label": "我要記帳",
                "text": "記帳"
              },
            },
            {
              "imageUrl": "https://instagram.ftpe8-1.fna.fbcdn.net/vp/59146b57fc7bf217506857e347071cfd/5DA151F4/t51.2885-15/sh0.08/e35/s640x640/43522125_1935003216805549_3927601828057184802_n.jpg?_nc_ht=instagram.ftpe8-1.fna.fbcdn.net",
              "action": {
                "type": "message",
                "label": "喵嗚",
                "text": "喵嗚"
              }
            },
            {
              "imageUrl": "https://images.pexels.com/photos/1353916/pexels-photo-1353916.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              "action": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/222"
              }
            }
        ]
    }
  }
  let replyMsg = [
    {
      "type": "template",
      "altText": "meow meow 來襲",
      "template": {
          "type": "buttons",
          "thumbnailImageUrl": "https://images.pexels.com/photos/1353916/pexels-photo-1353916.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          "imageAspectRatio": "rectangle",
          "imageSize": "cover",
          "imageBackgroundColor": "#FFFFFF",
          "title": "HELLO",
          "text": "Please select",
          "defaultAction": {
              "type": "uri",
              "label": "View detail",
              "uri": "http://example.com/page/123"
          },
          "actions": [
              {
                "type": "message",
                "label": "我要記帳",
                "text": "記帳"
              },
              {
                "type": "uri",
                "label": "View detail",
                "uri": "http://example.com/page/123"
              }
          ]
      }
    }
  ]
  let msg = { type: 'text', text: `你剛剛輸入的是：${text}` }
  if( text === '記帳') {
    msg = { type: 'text', text: `準備記帳咯！` }
  }
  replyMsg.push(msg)
  if (text === '[我要測試]') {
    sendMessage(event, carousel)
  } else {
    sendMessage(event, replyMsg)
  }
})

function sendMessage(event, replyMsg) {
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(replyMsg).then(() => {
    // 當訊息成功回傳後的處理
    // 取得 userId
    event.source.profile().then((profile) => {
      const { userId, displayName, pictueUrl} = profile
      console.log('pictueUrl', displayName)
      // setTimeout(() => {
      //   bot.push(userId, { type: 'text', text: `HI, ${displayName}`})
      // }, 500)
    })
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
    console.log(error)
  })
}

// follow
bot.on('follow', (event) => {
  console.log('=====follow=====', event)
  const welcomeMsg = [
    {
      type: 'text',
      text: 'ALOHA~~'
    },
    {
      type: 'sticker',
      packageId: '11537',
      stickerId: '52002758',
    },
  ]
  sendMessage(event, welcomeMsg)
})

// unfollow
bot.on('unfollow', (event) => {
  console.log('=====unfollow=====', event)
})

bot.on('join', (event) => {
  console.log('=====join=====', event)
})

bot.on('leave', (event) => {
  console.log('leave', event)
})

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', process.env.PORT || 3000, function () {
  console.log('[BOT IS READY..]')
})
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'faaaaq-bjlwz',
})

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        touser: event.userInfo.openId,
        page: 'pages/index/index',
        lang: 'zh_CN',
        data: {
          thing1: {
            value: '每日签到'
          },
          thing2: {
            value: '点击立即签到'
          },
          number3: {
            value: 3
          },
          time4: {
            value: '2021-01-11 11:54:33'
          },
          number6: {
            value: 123
          }
        },
        templateId: 'F1c7HrAd2XfbAONK7Rk4XdmoI9ExiP4j9DSk7GoxqAg',
        miniprogramState: 'trial'
      })
    return result
  } catch (err) {
    return err
  }
}
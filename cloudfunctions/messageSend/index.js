const cloud = require('wx-server-sdk')
cloud.init({
    env: 'faaaaq-bjlwz',
})
exports.main = async (event, context) => {
    console.log(event)
  try {
    const result = await cloud.openapi.uniformMessage.send({
        touser: event.userInfo.appId,
        mpTemplateMsg: {
          appid: 'wx0b89aba2a12c068f',
          url: 'http://weixin.qq.com/download',
          miniprogram: {
            appid: 'wx5fda9167b4baa43c',
            pagepath: 'pages/messageSend/messageSend'
          },
          data: {
            first: {
              value: '恭喜你购买成功！',
              color: '#173177'
            },
            keyword1: {
              value: '巧克力',
              color: '#173177'
            },
            keyword2: {
              value: '39.8元',
              color: '#173177'
            },
            keyword3: {
              value: '2014年9月22日',
              color: '#173177'
            },
            remark: {
              value: '欢迎再次购买！',
              color: '#173177'
            }
          },
          templateId: '_zeNqByELJ0lGWwvbkgwBvoxgSMv_aMiCu77EYk7VfI'
        }
      })
    return result
  } catch (err) {
    return err
  }
}
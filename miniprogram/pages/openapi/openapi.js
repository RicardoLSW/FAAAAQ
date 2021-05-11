Page({
  data: {
  },
  getTemplateList() {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'openapi',
      // 传给云函数的参数
      data: {
        action: 'getTemplateList',
      },
    })
    .then(res => {
      wx.showModal({
        title: '获取成功',
        content: JSON.stringify(res.result.data),
        showCancel: false,
      })
      console.log(JSON.stringify(res.result))
      console.log(res.result) // 3
    })
    .catch(console.error)
  },
})


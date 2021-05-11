// miniprogram/pages/messageSend/messageSend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  messageSend() {
    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'messageSend',
    //   // 传给云函数的参数
    //   data: {
    //     a: 1,
    //     b: 2,
    //   },
    // })
    // .then(res => {
    //   console.log(JSON.stringify(res.result))
    //   console.log(res.result) // 3
    // })
    // .catch(console.error)
    wx.requestSubscribeMessage({
      tmplIds: ['F1c7HrAd2XfbAONK7Rk4XdmoI9ExiP4j9DSk7GoxqAg'],
      success (res) {
        wx.cloud.callFunction({
          // 云函数名称
          name: 'sendMsg',
          // 传给云函数的参数
          data: {
            a: 1,
            b: 2,
          },
        })
        .then(res => {
          console.log(JSON.stringify(res.result))
          console.log(res.result) // 3
        })
        .catch(console.error)
      }})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      item: JSON.parse(options.item)
    })
  },
  addCart() {
    wx.request({
      method: "POST",
      url: 'http://localhost:3000/carts',
      data: this.data.item,
      success: (res) => {
        if (res.statusCode == 201) {
          wx.showToast({
            title: '添加成功'
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 2000)
        } else {
          wx.showToast({
            title: '请勿重复添加',
            icon: 'none'
          })
        }
      }
    })
  }
})
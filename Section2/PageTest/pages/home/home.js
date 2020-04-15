// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--页面创建时执行
   */
  onLoad: function(options) {
    console.log('执行onLoad');
  },

  /**
   * 生命周期函数--页面出现在前台时执行
   */
  onShow: function() {
    console.log('执行onShow');
  },

  /**
   * 生命周期函数--页面首次渲染完毕时执行
   */
  onReady: function() {
    console.log('执行onReady');
  },

  /**
   * 生命周期函数--页面从前台变为后台时执行
   */
  onHide: function() {
    console.log('执行onHide');
  },

  /**
   * 生命周期函数--页面销毁时执行
   */
  onUnload: function() {
    console.log('执行onUnload');
  },

  // 跳转到 detail
  toDetail: function() {
    console.log('页面跳转')
    wx.navigateTo({
      url: '../detail/detail'
    })
  }

})
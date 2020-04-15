//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {

  },
  testView() {
    wx.navigateTo({
      url: '../view/view',
    })
  },
  testScrollView() {
    wx.navigateTo({
      url: '../scroll-view/scroll-view',
    })
  },
  testMovableView() {
    wx.navigateTo({
      url: '../movable-view/movable-view',
    })
  },
  testCoverView() {
    wx.navigateTo({
      url: '../cover-view/cover-view',
    })
  },
  testSwiper() {
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  }
})

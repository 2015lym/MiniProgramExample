//index.js

Page({
  data: {

  },
  onLoad: function () {
  },
  testImage() {
    wx.navigateTo({
      url: '../test-image/test-image',
    })
  },
  testCamera() {
    wx.navigateTo({
      url: '../test-camera/test-camera',
    })
  },
  testAudio() {
    wx.navigateTo({
      url: '../test-audio/test-audio',
    })
  },
  testVideo() {
    wx.navigateTo({
      url: '../test-video/test-video',
    })
  },
  testMap() {
    wx.navigateTo({
      url: '../test-map/test-map',
    })
  }
})

//index.js

Page({
  data: {

  },
  onLoad: function () {
  },
  testSystemInfo() {
    wx.navigateTo({
      url: '../test-system-info/test-system-info',
    })
  },
  testHardwareFunction() {
    wx.navigateTo({
      url: '../test-hardware-function/test-hardware-function',
    })
  },
})

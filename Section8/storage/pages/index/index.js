//index.js

Page({
  data: {

  },
  onLoad: function () {

  },
  testStorage() {
    wx.navigateTo({
      url: '../test-storage/test-storage',
    })
  },
  testFile() {
    wx.navigateTo({
      url: '../test-file/test-file',
    })
  },

})
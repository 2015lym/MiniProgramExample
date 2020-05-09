//index.js

Page({
  data: {

  },
  testDataBinding() {
    wx.navigateTo({
      url: '../data-binding/data-binding',
    })
  },
  testListRendering() {
    wx.navigateTo({
      url: '../list-rendering/list-rendering',
    })
  },
  testConditionalRendering() {
    wx.navigateTo({
      url: '../conditional-rendering/conditional-rendering',
    })
  },

})

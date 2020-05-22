//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {

  },
  testButton() {
    wx.navigateTo({
      url: '../test-button/test-button',
    })
  },
  testInput() {
    wx.navigateTo({
      url: '../test-input/test-input',
    })
  },
  testTextarea() {
    wx.navigateTo({
      url: '../test-textarea/test-textarea',
    })
  },
  testCheckbox() {
    wx.navigateTo({
      url: '../test-checkbox/test-checkbox',
    })
  },
  testRadio() {
    wx.navigateTo({
      url: '../test-radio/test-radio',
    })
  },

  testSlider() {
    wx.navigateTo({
      url: '../test-slider/test-slider',
    })
  },
  testSwitch() {
    wx.navigateTo({
      url: '../test-switch/test-switch',
    })
  },
  testPicker() {
    wx.navigateTo({
      url: '../test-picker/test-picker',
    })
  }
})

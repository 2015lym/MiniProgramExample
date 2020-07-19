// pages/test-hardware-function/test-hardware-function.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '',
    clipboardValue: '',
    clipboardInfo: ''
  },
  phoneChange(e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  callPhone() {
    if (this.data.phoneNumber == '') {
      wx.showToast({
        title: '请输入电话号码',
        icon: 'none'
      })
      return;
    }
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber
    })
  },
  scanQrcode() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  clipboardChange(e) {
    this.setData({
      clipboardValue: e.detail.value
    })
  },
  setClipboardInfo() {
    wx.setClipboardData({
      data: this.data.clipboardValue,
    })
  },
  getClipboardInfo() {
    wx.getClipboardData({
      success: (option) => {
        this.setData({
          clipboardInfo: option.data
        })
      },
    })
  },
  shortVibrate() {
    wx.vibrateShort({
      success: (res) => {
        console.log('短震动成功')
      },
    })
  },
  longVibrate() {
    wx.vibrateLong({
      success: (res) => {
        console.log('长震动成功')
      },
    })
  }
})
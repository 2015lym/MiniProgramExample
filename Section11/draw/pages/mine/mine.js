// pages/mine/mine.js
Page({
  data: {
    userInfo: {
      nickName: '未登录',
      country: '-',
      avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
    },
    visible: false
  },
  onLoad(options) {
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo')
      })
    }
  },
  clearData() {
    this.setData({
      visible: true
    })
  },

  delete() {
    const array = wx.getStorageSync('homeList')
    for (const item of array) {
      wx.removeStorageSync(item)
    }
    wx.removeStorageSync('homeList')
    this.setData({
      visible: false
    })
  },
  cancel() {
    this.setData({
      visible: false
    })
  },
  login(e) {
    if (e.detail.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo
      })
      wx.setStorageSync('userInfo', e.detail.userInfo)
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      })
    }
  },
  logout() {
    wx.removeStorageSync('userInfo')
    this.setData({
      userInfo: {
        nickName: '未登录',
        country: '-',
        avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
      }
    })
  }
})
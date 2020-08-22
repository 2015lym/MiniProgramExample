// pages/mine/mine.js
Page({
  data: {
    userInfo: {
      nickName: '未登录',
      country: '-',
      avatarUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
    }
  },
  onLoad(options) {
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo')
      })
    }
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
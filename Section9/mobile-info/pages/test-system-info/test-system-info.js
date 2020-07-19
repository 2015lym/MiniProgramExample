// pages/test-system-info/test-system-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    systemInfo: {},
    netWorkType: '',
    batteryInfo: {}
  },

  getSystemInfo() {
    wx.getSystemInfo({
      success: (result) => {
        console.log(result)
        this.setData({
          systemInfo: result
        })
      },
    })
  },
  getNetworkStatus() {
    wx.getNetworkType({
      success: (result) => {
        console.log(result)
        this.setData({
          netWorkType: result.networkType
        })
      },
    })
  },
  networkStatusChanges() {
    wx.onNetworkStatusChange((result) => {
      console.log(result)
      this.setData({
        netWorkType: result.networkType
      })
    })
  },
  getBattery() {
    wx.getBatteryInfo({
      success: (result) => {
        console.log(result)
        this.setData({
          batteryInfo: result
        })
      },
    })
  }
})
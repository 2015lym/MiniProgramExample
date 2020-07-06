// pages/test-storage/test-storage.js

Page({
  data: {
    saveValue: '',
    loadValue: ''
  },
  onLoad: function () {

  },
  saveInputChange(e) {
    this.setData({
      saveValue: e.detail.value
    })
  },


  setValue () {
    wx.setStorage({
      key: 'name',
      data: this.data.saveValue,
      success (res) {
        console.log('保存完成')
      }
    })
  },

  setValueSync () {
    wx.setStorageSync('syncName', this.data.saveValue);
  },

  getValue () {
    var self = this;
    wx.getStorage({
      key: 'name',
      success (res) {
        self.setData({
          loadValue: res.data
        })
      }
    })
  },

  getValueSync () {
    this.setData({
      loadValue: wx.getStorageSync('syncName')
    })
  },

})
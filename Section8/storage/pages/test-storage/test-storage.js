// pages/test-storage/test-storage.js

Page({
  data: {
    saveValue: '',
    loadValue: '',
    info: {

    }

  },
  onLoad: function () {

  },
  saveInputChange(e) {
    this.setData({
      saveValue: e.detail.value
    })
  },


  setValue() {
    wx.setStorage({
      key: 'name',
      data: this.data.saveValue,
      success(res) {
        console.log('保存完成')
      }
    })
  },

  setValueSync() {
    wx.setStorageSync('syncName', this.data.saveValue);
  },

  getValue() {
    var self = this;
    wx.getStorage({
      key: 'name',
      success(res) {
        self.setData({
          loadValue: res.data
        })
      }
    })
  },

  getValueSync() {
    this.setData({
      loadValue: wx.getStorageSync('syncName')
    })
  },


  removeValue() {
    wx.removeStorage({
      key: 'name',
      success(res) {
        console.log('删除完成')
      }
    })
  },
  removeValueSync() {
    wx.removeStorageSync('syncName')
  },
  clearValue() {
    wx.clearStorage({
      complete: (res) => {
        console.log('清除成功')
      },
    })
  },
  clearValueSync() {
    wx.clearStorageSync();
  },

  getInfo() {
    this.setData({
      info: wx.getStorageInfoSync()
    })
  }
})
// pages/test-file/test-file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    downFilePath: '',
    url: '',
    fileList: []
  },
  downloadFile() {
    var self = this;
    wx.downloadFile({
      url: 'https://ss1.baidu.com/6ON1bjeh1BF3odCf/it/u=848642474,1693258193&fm=27&gp=0.jpg',
      success(res) {
        console.log(res)
        self.setData({
          downFilePath: res.tempFilePath
        })
      }
    })
  },

  saveFile() {
    if (this.data.downFilePath == '') {
      wx.showToast({
        title: '请先下载文件',
      })
      return;
    }
    var self = this;
    wx.saveFile({
      tempFilePath: this.data.downFilePath,
      success(res) {
        console.log(res)
        self.setData({
          url: res.savedFilePath
        })
      }
    })
  },

  getFileList() {
    var self = this;
    wx.getSavedFileList({
      success(res) {
        console.log(res)
        self.setData({
          fileList: res.fileList
        })
      }
    })
  },

  getFileInfo() {
    if (this.data.fileList.length == 0) {
      wx.showToast({
        title: '请先获取文件列表',
      })
      return;
    }
    var self = this;
    wx.getSavedFileInfo({
      filePath: this.data.fileList[0].filePath,
      success(res) {
        console.log(res)
      }
    })
  },

  deleteFile() {
    if (this.data.fileList.length == 0) {
      wx.showToast({
        title: '请先获取文件列表',
      })
      return;
    }
    var self = this;
    wx.removeSavedFile({
      filePath: this.data.fileList[0].filePath,
      success(res) {
        console.log(res)
      }
    })
  }
})
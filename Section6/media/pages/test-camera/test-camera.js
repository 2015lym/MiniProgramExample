// pages/test-camera/test-camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoUrl: ''
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          photoUrl: res.tempImagePath
        })
      }
    })
  },
  photoError(e) {
    console.log(e.detail)
  }
})
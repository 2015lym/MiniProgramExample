// pages/test-textarea/test-textarea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedbackText: "",
    numberText: "0/100"
  },

  bindinput: function (e) {
    var number = e.detail.value.length;
    this.setData({
      numberText: number + "/100",
      feedbackText: e.detail.value
    });
  },

  submit: function () {
    if (this.data.feedbackText.length == 0) {
      wx.showToast({
        title: '请填写意见反馈',
        icon: 'none'
      })
      return;
    }
    wx.showToast({
      title: '提交成功',
    })
    setTimeout(function () {
      wx.navigateBack({

      });
    }, 1500)
  }
})
// pages/test-check/test-check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    date: '',
    address: '',
    numberText: '0/100'
  },
  bindName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  dateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindAddress: function (e) {
    var number = e.detail.value.length;
    this.setData({
      numberText: number + "/100",
      address: e.detail.value
    });
  },
  submit() {
    if (this.data.name == '') {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      })
    } else if (this.data.date == '') {
      wx.showToast({
        title: '请选择生日',
        icon: 'none'
      })
    } else if (this.data.address == '') {
      wx.showToast({
        title: '请输入收获地址',
        icon: 'none'
      })
    } else {
      console.log('姓名：' + this.data.name);
      console.log('生日：' + this.data.date);
      console.log('收获地址：' + this.data.address);
    }
  }
})
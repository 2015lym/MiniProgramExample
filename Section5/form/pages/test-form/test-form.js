// pages/test-form/test-form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberText: '0/100'
  },
  bindAddress: function (e) {
    var number = e.detail.value.length;
    this.setData({
      numberText: number + "/100",
    });
  },
  submit(e) {
    console.log(e.detail.value);
    var name = e.detail.value.name;
    var date = e.detail.value.date;
    var address = e.detail.value.address;
    if (name == '') {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      })
    } else if (date == '') {
      wx.showToast({
        title: '请选择生日',
        icon: 'none'
      })
    } else if (address == '') {
      wx.showToast({
        title: '请输入收获地址',
        icon: 'none'
      })
    } else {
      console.log('姓名：' + name);
      console.log('生日：' + date);
      console.log('收获地址：' + address);
    } 
  },
  reset() {
    console.log('重置')
  }
})
// pages/test-input/test-input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '张三',
    changeValue: '',
  },
  inputChange(e) {
    this.setData({
      changeValue: e.detail.value
    })
    console.log(e.detail.value)
  },
})
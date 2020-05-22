// pages/test-switch/test-switch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  switchChange(e) {
    console.log('当前值为' + e.detail.value);
  }
})
// pages/test-slider/test-slider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  sliderChange(e) {
    console.log('当前值为' + e.detail.value);
  }
})
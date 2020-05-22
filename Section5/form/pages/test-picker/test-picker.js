// pages/test-picker/test-picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorItem: '',
    selectorArray: [
      '张三', '李四', '王五'
    ],
    multiSelectorItem: '',
    multiSelectorArray: [
      ['张三', '李四', '王五'],
      ['一班', '二班', '三班'],
      ['在岗', '缺勤', '休息']
    ],
    time: '',
    date: '',
    region: ''
  },

  selectorChange(e) {
    let value = this.data.selectorArray[e.detail.value];
    this.setData({
      selectorItem: value
    })
  },
  multiSelectorChange(e) {
    let value1 = this.data.multiSelectorArray[0][e.detail.value[0]];
    let value2 = this.data.multiSelectorArray[1][e.detail.value[1]];
    let value3 = this.data.multiSelectorArray[2][e.detail.value[2]];
    this.setData({
      multiSelectorItem: value1 + ',' + value2 + ',' + value3
    })
  },
  timeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  dateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  regionChange(e) {
    this.setData({
      region: e.detail.value
    })
  }
})
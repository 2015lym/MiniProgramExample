// pages/data-binding/data-binding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '张三',
    userInfo: {
      sex: '男',
      age: 18
    }
  },

  addAge () {
    this.setData({
      userInfo: {
        sex: this.data.userInfo.sex,
        age: this.data.userInfo.age + 1
      }
    })
  }
})
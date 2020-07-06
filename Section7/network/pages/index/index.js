const Request = require('../../utils/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: []
  },

  /**
   * 生命周期函数--页面创建时执行å
   */
  onLoad: function(options) {
    Request.get('users',{},{userId: 1234}).then(res => {
      this.setData({
        users: res.data
      })
    }).catch(err => {});
  },


})
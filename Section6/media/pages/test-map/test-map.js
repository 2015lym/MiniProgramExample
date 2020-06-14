// pages/test-map/test-map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '',
    latitude: '',
    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getLocation({
      success(res) {
        console.log(res);
        var array = [];
        for (let i = 0; i < 3; i++) {
          var item = {
            id: i,
            title: '我是标记' + i,
            longitude: res.longitude + i * 0.1,
            latitude: res.latitude + i * 0.1,
            width: 40,
            height: 40,
          }
          array.push(item);
        }
        self.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: array
        });
      }
    })
  },
  markertap(e) {
    console.log('1111')
    wx.showToast({
      title: '点击了标记',
    })
  }

})
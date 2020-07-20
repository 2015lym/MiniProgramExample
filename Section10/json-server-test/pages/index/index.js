//index.js

Page({
  data: {
    listData: []
  },
  onLoad: function () {
    wx.request({
      url: 'http://localhost:3000/users',
      success: (res) => {
        this.setData({
          listData: res.data
        })
      }
    })
  },
  // 新增
  addPeople() {

  },
  // 编辑
  edit(data) {
    console.log(data)
  }

})
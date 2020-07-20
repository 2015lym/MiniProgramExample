//index.js

Page({
  data: {
    listData: []
  },
  onShow: function () {
    this.getUsersList()
  },
  // 获取用户列表
  getUsersList() {
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
  },
  // 删除
  delete(data) {
    var userId = data.currentTarget.dataset.item.id;
    wx.request({
      method: 'DELETE',
      url: 'http://localhost:3000/users/' + userId,
      success: (res) => {
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  }

})
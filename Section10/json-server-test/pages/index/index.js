//index.js

Page({
  data: {
    listData: [],
    currentUserId: '',
    deleteVisible: false,
    deleteActions: [{
      name: '取消'
    }, {
      name: '删除',
      color: '#ed3f14',
      loading: false
    }]
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
    wx.navigateTo({
      url: '../edit-people/edit-people',
    })
  },
  // 编辑
  edit(data) {
    const item = data.currentTarget.dataset.item
    wx.navigateTo({
      url: '../edit-people/edit-people?item=' + JSON.stringify(item)
    })
  },
  // 删除
  delete(data) {
    this.setData({
      currentUserId: data.currentTarget.dataset.item.id,
      deleteVisible: true
    });
  },
  deleteItem({ detail }) {
    const index = detail.index;
    this.setData({
      deleteVisible: false
    })
    if (index == 1) {
      wx.request({
        method: 'DELETE',
        url: 'http://localhost:3000/users/' + this.data.currentUserId,
        success: (res) => {
          wx.showToast({
            title: '删除成功',
          })
          this.getUsersList();
        }
      })
    }
    
  }

})
// pages/edit-people/edit-people.js
Page({
  data: {
    item: {}
  },
  onLoad: function (options) {
    if (options.item) {
      this.setData({
        item:  JSON.parse(options.item)
      })
    }
  },
  changeName(e) {
    this.setData({
      'item.name': e.detail.detail.value
    })
  },
  changeAge(e) {
    this.setData({
      'item.age': e.detail.detail.value
    })
  },
  changeAddress(e) {
    this.setData({
      'item.address': e.detail.detail.value
    })
  },
  submit() {
    if (this.data.item.id) {
      wx.request({
        method: "PUT",
        url: 'http://localhost:3000/users/' + this.data.item.id,
        data: this.data.item,
        success: (res) => {
          wx.showToast({
            title: '编辑成功'
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 2000)
        }
      })
    } else {
      wx.request({
        method: "POST",
        url: 'http://localhost:3000/users',
        data: this.data.item,
        success: (res) => {
          wx.showToast({
            title: '添加成功'
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 2000)
        }
      })
    }
    
  }
})
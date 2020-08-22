// pages/cart/cart.js
Page({

  data: {
    bookList: []
  },

  onShow: function () {
    this.getCarts()
    
  },
  getCarts() {
    wx.request({
      url: 'http://localhost:3000/carts',
      success: (res) => {
        this.setData({
          bookList: res.data
        })
      }
    })
  },
  buy() {
    if (this.data.bookList.length == 0) {
      wx.showToast({
        title: '没有获取，请先下单',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '购买成功',
      })
    }
    for (let i = 0; i < this.data.bookList.length; i++) {
      const element = this.data.bookList[i];
      wx.request({
        method: 'DELETE',
        url: 'http://localhost:3000/carts/' + element.id,
        success: (res) => {
          this.getCarts()
        }
      }) 
    }
  }
})
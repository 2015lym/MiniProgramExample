// pages/category/category.js
Page({

  data: {
    bookList: []
  },
  onShow: function () {
    wx.request({
      url: 'http://localhost:3000/books',
      success: (res) => {
        this.setData({
          bookList: res.data
        })
      }
    })
  },
  selectBook(e) {
    wx.navigateTo({
      url: '../detail/detail?item=' + JSON.stringify(e.currentTarget.dataset.item),
    })
  }
})
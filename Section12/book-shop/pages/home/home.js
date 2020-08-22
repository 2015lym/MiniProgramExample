// pages/home/home.js
Page({

  data: {
    bannerList: [],
    activityList: [],
    bookList: []
  },

  onLoad: function (options) {
    this.getBanner()
    this.getActivity()
    this.getBooks()
  },
  getBanner() {
    wx.request({
      url: 'http://localhost:3000/banner',
      success: (res) => {
        this.setData({
          bannerList: res.data
        })
      }
    })
  },
  getActivity() {
    wx.request({
      url: 'http://localhost:3000/activity',
      success: (res) => {
        this.setData({
          activityList: res.data
        })
      }
    })
  },
  getBooks() {
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
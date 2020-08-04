// pages/draw-view/draw-view.js
Page({

  data: {
    listData: [],
    lastItem: '',
    currentItem: '',
    actions: [{
        name: '取消'
      },
      {
        name: '删除',
        color: '#ed3f14',
        loading: false
      }
    ],
    visible: false
  },
  onLoad: function (options) {
    this.setData({
      lastItem: options.item
    })
    wx.setNavigationBarTitle({
      title: options.item,
    })
  },
  onShow: function () {
    this.setData({
      listData: wx.getStorageSync(this.data.lastItem)
    })
  },
  // 添加子选项
  addItem() {
    wx.navigateTo({
      url: '../edit-item/edit-item?item=' + this.data.lastItem
    })
  },
  // 抽签
  draw() {
    if (this.data.listData.length == 0) {
      wx.showToast({
        title: '没有数据',
        icon: 'none'
      })
    } else {
      const randomNumber = this.getRandomNumber(0, this.data.listData.length);
      wx.showToast({
        title: this.data.listData[randomNumber]
      })
    }
  },
  // 获取随机数
  getRandomNumber(begin, end) {
    return Math.floor(Math.random() * (end - begin)) + begin;
  },
  // 删除子选项弹窗
  delete(e) {
    this.setData({
      visible: true,
      currentItem: e.currentTarget.dataset.item
    });

  },
  // 删除子选项
  realDelete({detail}) {
    if (detail.index === 1) {
      var newArray = [];
      for (const item of this.data.listData) {
        if (item != this.data.currentItem) {
          newArray.push(item);
        }
      }
      this.setData({
        listData: newArray
      })
      wx.setStorageSync(this.data.lastItem, this.data.listData);
      wx.showToast({
        title: '删除成功',
      })
    }
    this.setData({
      visible: false
    });
  }
})
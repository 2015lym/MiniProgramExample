// pages/home/home.js

Page({
  data: {
    listData: [],
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
  onShow: function () {
    this.setData({
      listData: wx.getStorageSync('homeList')
    })
  },
  // 添加选项
  addItem() {
    wx.navigateTo({
      url: '../edit-item/edit-item',
    })
  },
  // 进入抽签页
  draw(e) {
    wx.navigateTo({
      url: '../draw-view/draw-view?item=' + e.currentTarget.dataset.item,
    })
  },
  // 删除子选项弹窗
  delete(e) {
    console.log(e)
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
      wx.setStorageSync('homeList', this.data.listData)
      wx.removeStorageSync(this.data.currentItem)
      wx.showToast({
        title: '删除成功',
      })
    }
    this.setData({
      visible: false
    });
  }
})
// pages/edit-item/edit-item.js
Page({
  data: {
    title: '添加选项',
    saveKey: 'homeList',
    itemName: ''
  },
  onLoad: function (options) {
    if (options.item) {
      this.setData({
        title: '添加 "' + options.item + '" 的子选项',
        saveKey: options.item
      })
    }
  },
  changeItem(e) {
    this.setData({
      itemName: e.detail.detail.value
    })
  },
  // 提交
  submit() {
    if (this.data.itemName.length === 0) {
      wx.showToast({
        title: '内容过短',
        icon: 'none'
      })
    } else if (this.data.itemName.length > 10) {
      wx.showToast({
        title: '内容过长',
        icon: 'none'
      })
    } else {
      var items;
      var key = this.data.saveKey;
      if (wx.getStorageSync(key)) {
        items = wx.getStorageSync(key);
        for (const key of items) {
          if (key == this.data.itemName) {
            wx.showToast({
              title: '已存在',
              icon: 'none'
            })
            return;
          }
        }
      } else {
        items = [];
      }
      items.push(this.data.itemName);
      wx.setStorageSync(key, items);
      wx.showToast({
        title: '保存成功',
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1000)
    }
  }
})
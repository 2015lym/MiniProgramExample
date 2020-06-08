//index.js

Page({
  submit(e) {
    console.log(e.detail.value);
    var account = e.detail.value.account;
    var password = e.detail.value.password;
    var isRember = e.detail.value.isRember;
    if (account == '') {
      wx.showToast({
        title: '请输入账号',
        icon: 'none'
      })
    } else if (password == '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
    } else {
      console.log('账号：' + account);
      console.log('密码：' + password);
      console.log('是否记住密码：' + isRember);
    }
  }
})
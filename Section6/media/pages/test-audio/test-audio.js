// pages/test-audio/test-audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: '/images/qlx.jpg',
    name: '七里香',
    author: '周杰伦',
    src: '/music/七里香.mp3',
  },
  onLoad: function (options) {
    this.audioCtx = wx.createAudioContext('musicAudio');
  },
  audioPlay: function () {
    this.audioCtx.play();
  },
  audioPause: function () {
    this.audioCtx.pause();
  },
  audioReset: function () {
    this.audioCtx.seek(0);
  }
})
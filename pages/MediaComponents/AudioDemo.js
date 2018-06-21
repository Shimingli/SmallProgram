// audio
// 注意：1.6.0 版本开始，该组件不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口

Page({
  data: {
    current: {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',//图片
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',//音乐地址 
    },
    audioAction: {
      method: 'pause' //我感觉是audio 内部的方法 哈哈！！！！！！  麻痹我看的 有点晕  草拟吗 算了  这个不关键了 
    }
  },
  //bindplay	EventHandle		当开始/继续播放时触发play事件 
  audioPlayed: function (e) {
    console.log('audio is played')
  },
  //bindtimeupdate	EventHandle		当播放进度改变时触发 timeupdate 事件，detail = { currentTime, duration }
  audioTimeUpdated: function (e) {
    console.log("shiming 开始的时间==="+this.duration);
    this.duration = e.detail.duration;

    console.log("shiming 结束的时间===" + this.duration);
  },
  //进度 
  timeSliderChanged: function (e) {
    if (!this.duration)
      return;

    var time = this.duration * e.detail.value / 100;

    this.setData({
      audioAction: {
        method: 'setCurrentTime',
        data: time
      }
    });
  },
  //播放速率 
  playbackRateSliderChanged: function (e) {
    this.setData({
      audioAction: {
        method: 'setPlaybackRate',
        data: e.detail.value
      }
    })
  },
  //播放的按钮 
  playAudio: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }
    });
  },
  //暂停 
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  }
})
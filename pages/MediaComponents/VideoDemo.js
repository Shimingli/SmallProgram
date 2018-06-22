//获取随机的颜色  

// tip: video 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z- index 控制层级。
// tip: 请勿在 scroll- view、swiper、picker - view、movable - view 中使用 video 组件。
// tip: css 动画对 video 组件无效。
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src: '',
    danmuList:
    [
      {
        text:"shiming  0.5s",
        color: getRandomColor(),
        time:0.5
      },
      {
        text: "shiming  1s",
       color: getRandomColor(),
        time:1
      },
      {
        text: "shiming  2s",
        color: getRandomColor() ,
        time:2
      },
      {
        text: "shiming  3s",
        color: getRandomColor() ,
        time:3
      },
      {
        text: "shiming  4s",
        color: getRandomColor(),
        time:4
      },
      {
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    },
    {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }]
  },
 // input失去焦点的时候   就会触发 
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
    console.log("shiming  e.detail.value 弹幕输入的内容=" + e.detail.value)
  },
  //大概 就是 把用户在手机上的输入的东西  ，全部的凑合在一起
  bindSendDanmu: function () {
    console.log("shiming  发送弹幕=="+this.inputValue)
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  bindPlay: function () {
    this.videoContext.play()
  },
  bindPause: function () {
    this.videoContext.pause()
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})
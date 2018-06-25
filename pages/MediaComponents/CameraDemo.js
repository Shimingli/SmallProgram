

// tip: camera 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z- index 控制层级。可使用 cover- view cover- image覆盖在上面。
// tip: 同一页面只能插入一个 camera 组件。
// tip: 请勿在 scroll- view、swiper、picker - view、movable - view 中使用 camera 组件。
// bug: scan - area 属性目前存在识别区域不准的问题，建议先不指定
Page({
  onLoad() {
    //创建并返回 camera 上下文 cameraContext 对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个camera，通过它可以操作对应的 <camera/> 组件。 在自定义组件下，第一个参数传入组件实例this，以操作组件内 <camera/> 组件
    this.ctx = wx.createCameraContext()
  },
  //拍照去了 
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',//感觉就是质量的高低
      success: (res) => {
        console.log("shiming " + res.tempImagePath)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord() {
    this.ctx.startRecord({
      success: (res) => {//开始录制，保存到本地 
        console.log('startRecord')
      }
    })
  },
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  //binderror	EventHandle		用户不允许使用摄像头时触发	用户没有给与权限 
  error(e) {
    console.log(e.detail)
  }
})
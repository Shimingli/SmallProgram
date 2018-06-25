Page({
  onLoad() {
    //创建并返回 camera 上下文 cameraContext 对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个camera，通过它可以操作对应的 <camera/> 组件。 在自定义组件下，第一个参数传入组件实例this，以操作组件内 <camera/> 组件
    this.ctx = wx.createCameraContext()
  },
  //拍照去了 
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
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
      success: (res) => {
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
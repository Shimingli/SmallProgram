//app.js
App({
  onShow:function(){
    console.log("shiming App onShow()");
  },
  onHide:function(){
    console.log("shiming App onHide()");
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now() +"App开始加载了")
    wx.setStorageSync('logs', logs)
    console.log("shiming App onLaunch()");
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.getLocation({
          success: function(res) {
           var logs = wx.getStorageSync('logs') || []
           logs.unshift('获取位置了'+res.longitude+"shiming=="+res.latitude)
           wx.setStorageSync('logs', logs)
           console.log("shiming  获取用户的位置"+res.longitude+"----->"+res.latitude)
          },
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
  
})
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

// 格式调整

//   * Ctrl + S：保存文件（必须保存才可以看到效果）
// * Ctrl + [， Ctrl +]：代码行缩进
//   * Ctrl + Shift + [， Ctrl + Shift +]：折叠打开代码块
//     * Ctrl + C Ctrl+ V：复制粘贴，如果没有选中任何文字则复制粘贴一行
//       * Shift + Alt + F：代码格式化
//         * Alt + Up，Alt + Down：上下移动一行
//           * Shift + Alt + Up，Shift + Alt + Down：向上向下复制一行
//             * Ctrl + Shift + Enter：在当前行上方插入一行
//               * Ctrl + Shift + F：全局搜索

// 光标相关

//   * Ctrl + End：移动到文件结尾
//     * Ctrl + Home：移动到文件开头
//       * Ctrl + i：选中当前行
//         * Shift + End：选择从光标到行尾
//           * Shift + Home：选择从行首到光标处
//             * Ctrl + Shift + L：选中所有匹配
//               * Ctrl + D：选中匹配
//                 * Ctrl + U：光标回退
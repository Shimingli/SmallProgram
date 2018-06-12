//index.js
//获取应用实例
const app = getApp()
// onLoad
// 监听页面加载
// 页面刚开始加载的时候触发。只会调用一次。
// onReady
// 监听页面初次渲染完成
// 类似于html的 onReady。只会调用一次。
// onShow
// 监听页面显示
// 页面显示的时候触发，比如页面切换
// onHide
// 监听页面隐藏
// 和onShow对应
// onUnload
// 监听页面卸载
// 在 redirectTo 或 navigateBack 的时候调用
//Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
Page({
  // 页面的初始数据
  data: {
    motto: 'ddd',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onUnload :function(){
    console.log("shiming 首页在页面卸载了")
  },
  onHide :function(){
    console.log("shiming 首页在隐藏了")
  },
  onShow : function(){
    console.log("shiming 首页的页面显示了")
  },
  onReady: function(){
    console.log("shiming 首页在准备了")
  },
//   onPullDownRefresh   
// 监听用户下拉动
// 1）需要在config的window选项中开启enablePullDownRefresh。
// 2）当处理完数据刷新后，wx.stopPullDownRefresh 可以停止当前页面的下拉刷新。
  onPullDownRefresh : function(){
    console.log("shiming 首页在下拉刷新了")
    wx.stopPullDownRefresh
  },
  //onReachBottom   
  // 页面上拉触底事件的处理函数
  onReachBottom : function(){
    console.log("shiming 首页在拉到底部了")
  },
  onLoad: function () {
    console.log("shiming 首页开始加载了")
    var logs = wx.getStorageSync('logs') || []
    logs.unshift("首页在加载了")
    wx.setStorageSync('logs', logs)
    console.log("shiming 首页开始加载了 app.globalData.userInfo==" + app.globalData.userInfo)
    console.log("shiming 首页开始加载了  this.data.canIUse==" + this.data.canIUse)
    if (app.globalData.userInfo) {
      console.log("shiming 首页开始加载了" + app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log("shiming 首页开始加载了 res.userInfo==" + res.userInfo.avatarUrl)
        console.log("shiming 首页开始加载了 res.nickName==" + res.userInfo.nickName)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log("shiming e"+e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

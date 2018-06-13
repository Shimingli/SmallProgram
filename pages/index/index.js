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

    motto: 'Demo start',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //navigateTo:fail url "pages/index/pages/scrolldemo/scrolldemo" is not in app.json 
  //原因是少了 '/pages/scrolldemo/scrolldemo' 前面少了一个 / 符号 
tap_to_scroll:function(){
  wx.navigateTo({
    url: '/pages/scrolldemo/scrolldemo',
  })
 },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onUnload :function(){
    console.log("shiming index onUnload")
  },
  onHide :function(){
    console.log("shiming index onHide ")
  },
  onShow : function(){
    console.log("shiming index onShow")
  },
  onReady: function(){
    console.log("shiming  index onReady")
  },
//   onPullDownRefresh   
// 监听用户下拉动
// 1）需要在config的window选项中开启enablePullDownRefresh。
// 2）当处理完数据刷新后，wx.stopPullDownRefresh 可以停止当前页面的下拉刷新。
  onPullDownRefresh : function(){
    console.log("shiming  index onPullDownRefresh")
    wx.stopPullDownRefresh
  },
  //onReachBottom   
  // 页面上拉触底事件的处理函数
  /**
   * 和 onPullDownRefresh 事件相对于，只有onPullDownRefresh的事件触发了，这个事件才会触发
   * 页面上拉触底事件的处理函数
   */
  onReachBottom : function(){
    console.log("shiming index onReachBottom")
  },
  /**
   * 	生命周期函数--监听页面卸载 好像废弃掉了
   */
  onUnLoad :function(){
    console.log("shiming index onUnLoad")
  },
  /**
   * onShareAppMessage  用户点击右上角转发
   */
  onShareAppMessage :function(){
     console.log("shiming index onShareAppMessage");
  },
  /**
   * 代码没有提醒出这个方法是否的有效，但是呢，实际上这个方法是有效果的哦
   * 页面滚动触发事件的处理函数 onPageScroll
   */
  onPageScroll : function(){
     console.log("shiming index onPageScroll")
  },
  /**
   * onTabItemTap 这个方法，就好像多次的点击了下面的Tab的时候，都会执行
   * 这个方法也提醒不出来，可能是我的 设置的问题，所以还要看看 到底是什么的问题
   * 这个方法也是管作用的 
   * 我在想能不能 调用里面的方法 
   * 如果下面的方法注释掉的话，会调用这个方法
   */
  onTabItemTap :function(){
    console.log("shiming index onTabItemTap");
  },
  /**
   * 如果不注释，多次的点击看看,只有第二次的点击才会走这个方法 
   */
  onTabItemTap(item) {
    console.log("shiming index item.index=="+item.index)
    console.log("shiming index item.pagePath=="+item.pagePath)
    console.log("shiming index item.text=="+item.text)
  },
  customData: {
    hi: 'MINA'
  },
  onLoad: function () {
    console.log("shiming index onLoad")
    var logs = wx.getStorageSync('logs') || []
    logs.unshift("首页在加载了")
    wx.setStorageSync('logs', logs)
    console.log("shiming index onLoad app.globalData.userInfo==" + app.globalData.userInfo)
    console.log("shiming index  onLoad  this.data.canIUse==" + this.data.canIUse)
    if (app.globalData.userInfo) {
      console.log("shiming index onLoad" + app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log("shiming index onLoad res.userInfo==" + res.userInfo.avatarUrl)
        console.log("shiming index onLoad res.nickName==" + res.userInfo.nickName)
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

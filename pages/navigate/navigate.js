// pages/navigate/navigate.js

// target	String		在哪个目标上发生跳转，默认当前小程序	2.0.7
// url	String		当前小程序内的跳转链接	
// open - type	String	navigate	跳转方式	
// delta	Number		当 open- type 为 'navigateBack' 时有效，表示回退的层数
// app - id	String		当target= "miniProgram"时有效，要打开的小程序 appId	2.0.7
// path	String		当target= "miniProgram"时有效，打开的页面路径，如果为空则打开首页	2.0.7
// extra - data	Object		当target= "miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch() ，App.onShow() 中获取到这份数据。详情	2.0.7
// version	version	release	当target= "miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。	2.0.7
// hover - class String	navigator- hover	指定点击时的样式类，当hover - class="none"时，没有点击态效果
// hover - stop - propagation	Boolean	false	指定是否阻止本节点的祖先节点出现点击态	1.5.0
// hover - start - time	Number	50	按住后多久出现点击态，单位毫秒
// hover - stay - time	Number	600	手指松开后点击态保留时间，单位毫秒

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
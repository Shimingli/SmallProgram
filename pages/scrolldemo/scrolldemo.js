// pages/scrolldemo/scrolldemo.js
// scroll-view
// 可滚动视图区域。
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
//scroll-into-view toView	String		值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
  data: {
    toView: 'red',//注意这里有些问题 如果写成 #red 的话，会 id 属性值格式错误。如不能以数字开头。
    scrollTop: 100, //scroll-top	Number		设置竖向滚动条位置
  },
  shimingtext: function(e){
    console.log("shiming shimingtext on click")
  },
  //bindscrolltoupper="upper"		滚动到顶部/左边，会触发 scrolltoupper 事件
  upper: function (e) {
    console.log(e)
    console.log("shiming e upper" + e)
  },
  leftclick : function(){
    console.log("shiming leftclick")
  },
  //bindscrolltolower	EventHandle		滚动到底部/右边，会触发 scrolltolower 事件
  lower: function (e) {
    console.log("shiming e lower" + e)
  },
  //bindscroll	EventHandle		滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
  scroll: function (e) {
    console.log("shiming e scroll" + e)
  },
  tap: function (e) {
    console.log("shiming e tap" + e)
    for (var i = 0; i < order.length; ++i) {
      console.log("shiming toView---" + order[i])
      console.log("shiming order[i + 1]  toView---" + order[i + 1])
      console.log("shiming  this.data.toView toView---" + this.data.toView)
      if (order[i] === this.data.toView) {
        console.log("shiming 最終的顏色是 那個    toView---" + order[i]) 
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    console.log("shiming e tapMove" + e)
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
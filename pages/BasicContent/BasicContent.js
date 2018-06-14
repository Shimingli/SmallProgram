// pages/BasicContent/BasicContent.js

//type	String		icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear
// size	Number	23	icon的大小，单位px
// color	Color		icon的颜色，同css的color
Page({

  /**
   * 页面的初始数据
   */
  data: {

    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(41,120,255)', 'blue', 'purple'//可以使用rgb 这个可以的哦 
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
  },
text_demo: function(){
  wx.navigateTo({
    url: '/pages/BasicContent/TextDemo',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
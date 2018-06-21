// pages/FormDemo/FormDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  button :function(){
    wx.navigateTo({
      url: '/pages/FormDemo/ButtonDemo',
    })
  },
  checkboxGroup :function(){
    wx.navigateTo({
      url: '/pages/FormDemo/CheckboxGroupDemo',
    })
  },
  formDemo: function () {
    wx.navigateTo({
      url: '/pages/FormDemo/FormDemoIndex',//表单
    })
  },
  input: function () {
    wx.navigateTo({
      url: '/pages/FormDemo/InputDemo',//input 输入框。
    })
  },
  labelDemo : function(){
    wx.navigateTo({
      url: '/pages/FormDemo/LabelDemo',//label 
    })
  },
  slider :function(){
    wx.navigateTo({
      url: '/pages/FormDemo/SliderDemo',//slider 
    })
  },
  // picker
  // 从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。
  picker :function(){
    wx.navigateTo({
      url: '/pages/FormDemo/PickerDemo',
    })
  },
  pickerview :function(){
    wx.navigateTo({
      url: '/pages/FormDemo/PickerViewDemo',
    })
  },
  textarea : function(){
     wx.navigateTo({
       url: '/pages/FormDemo/TextAreaDemo',//多行输入框 
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
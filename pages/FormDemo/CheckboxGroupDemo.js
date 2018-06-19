// pages/FormDemo/CheckboxGroupDemo.js
// value	String		< checkbox />标识，选中时触发 < checkbox - group />的 change 事件，并携带 < checkbox /> 的 value
// disabled	Boolean	false	是否禁用
// checked	Boolean	false	当前是否选中，可用来设置默认选中
// color	Color		checkbox的颜色，同css的color
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true'},
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国', checked: 'true'}
    ]
  },
  //bindchange	EventHandle		<checkbox-group/>中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]}
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var arr= e.detail.value;
    if (e.detail.value=="TUR"){
      console.log("shiming "+arr)
      console.log("shiming " +e.detail) 
       var checlk= e.detail;
       
    }
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
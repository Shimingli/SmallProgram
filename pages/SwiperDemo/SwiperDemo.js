Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,//indicator-dots	Boolean	false	是否显示面板指示点
    vertical: false,//vertical	Boolean	false	滑动方向是否为纵向
    autoplay: true,//autoplay	Boolean	false	是否自动切换
    circular: true,//circular	Boolean	false	是否采用衔接滑动 就是滑动完了，在继续的滑动，而不是滑动到首页 
    interval: 2000,//interval	Number	2000	自动切换时间间隔
    duration: 500,//duration	Number	500	滑动动画时长
    previousMargin: 0,//previous-margin	String	"0px"	前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: 0,//next-margin	String	"0px"	后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    swiperCurrent:0
  },
  swipclick : function(){
    console.log("shiming swipclick" + this.data.swiperCurrent)
    if (this.data.swiperCurrent==0){
      wx.navigateTo({
        url: '/pages/SwiperDemo/SwiperDemoAnather',
      })
    }
  },
  //轮播图的切换事件
  swiperChange: function (e) {
    console.log("shiming  wiperChange" + e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //: switch类型切换时在iOS自带振动反馈，可在系统设置 -> 声音与触感 -> 系统触感反馈中关闭
  changeProperty: function (e) {
    //改变里面的对象，这里很好的例子 
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    //perpertyNameindicatorDots
    console.log("shiming perpertyName" + propertyName)
    newData[propertyName] = e.detail.value
    //e.detail.valuetrue
    console.log("shiming e.detail.value" + e.detail.value)
    console.log("shiming newData" + newData.toString)
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})

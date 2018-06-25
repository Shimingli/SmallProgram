// tip: map 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z- index 控制层级。
// tip: 请勿在 scroll- view、swiper、picker - view、movable - view 中使用 map 组件。
// tip: css 动画对 map 组件无效。
// tip: map 组件使用的经纬度是火星坐标系，调用 wx.getLocation 接口需要指定 type 为 gcj02

Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    // markers
// 标记点用于在地图上显示标记的位置
// id	标记点id	Number	否	marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。
//  latitude	纬度	Number	是	浮点数，范围 -90 ~ 90	
// longitude	经度	Number	是	浮点数，范围 - 180 ~ 180	
// title	标注点名	String	否		
// iconPath	显示的图标	String	是	项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径	
// rotate	旋转角度	Number	否	顺时针旋转的角度，范围 0 ~ 360，默认为 0	
// alpha	标注的透明度	Number	否	默认1，无透明，范围 0 ~ 1	
// width	标注图标宽度	Number	否	默认为图片实际宽度	
// height	标注图标高度	Number	否	默认为图片实际高度	
// callout	自定义标记点上方的气泡窗口	Object	否	支持的属性见下表，可识别换行符。	1.2.0
// label	为标记点旁边增加标签	Object	否	支持的属性见下表，可识别换行符。	1.2.0
// anchor	经纬度在标注图标的锚点，默认底边中点	Object	否	{x, y }，x表示横向(0 - 1) ，y表示竖向(0 - 1) 。{ x: .5, y: 1 } 表示底边中点
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/images/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/images/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  //获取位置 
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  //moveToLocation 移动位置
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  //移动标注 
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  //缩放视野展示所有经纬度
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})

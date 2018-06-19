var types = ['default', 'primary', 'warn']
// size	String	default	按钮的大小
// type String	default	按钮的样式类型
// plain	Boolean	false	按钮是否镂空，背景色透明
// disabled	Boolean	false	是否禁用		
// loading	Boolean	false	名称前是否带 loading 图标		
// form - type	String		用于 < form /> 组件，点击分别会触发 < form /> 组件的 submit/ reset 事件		
// open - type	String		微信开放能力		1.1.0
// hover - class String	button- hover	指定按钮按下去的样式类。当 hover- class="none" 时，没有点击态效果
// hover - stop - propagation	Boolean	false	指定是否阻止本节点的祖先节点出现点击态		1.5.0
// hover - start - time	Number	20	按住后多久出现点击态，单位毫秒
// hover - stay - time	Number	70	手指松开后点击态保留时间，单位毫秒
// lang	String	en	指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。	open - type="getUserInfo"	1.3.0
// bindgetuserinfo	Handler		用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致	open- type="getUserInfo"	1.3.0
// session - from	String		会话来源	open- type="contact"	1.4.0
// send - message - title	String	当前标题	会话内消息卡片标题	open- type="contact"	1.5.0
// send - message - path	String	当前分享路径	会话内消息卡片点击跳转小程序路径	open- type="contact"	1.5.0
// send - message - img	String	截图	会话内消息卡片图片	open- type="contact"	1.5.0
// show - message - card	Boolean	false	显示会话内消息卡片	open- type="contact"	1.5.0
// bindcontact	Handler		客服消息回调	open- type="contact"	1.5.0
// bindgetphonenumber	Handler		获取用户手机号回调	open- type="getPhoneNumber"	1.2.0
// app - parameter	String		打开 APP 时，向 APP 传递的参数	open- type="launchApp"	1.9.5
// binderror	Handler		当使用开放能力时，发生错误的回调	open- type="launchApp"	1.9.5
// bindopensetting	Handler		在打开授权设置页后回调	open- type="openSetting"	2.0.7 

var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  //disabled	Boolean	false	是否禁用 
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  // plain	Boolean	false	按钮是否镂空，背景色透明
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  // loading	Boolean	false	名称前是否带 loading 图标		
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  //getUserInfo	获取用户信息，可以从bindgetuserinfo回调中获取到用户信息	1.3.0
  onGotUserInfo: function (e) {
    console.log("shiming--->onGotUserInfo"+e.detail.errMsg)
    console.log("shiming--->onGotUserInfo" +e.detail.userInfo)
    console.log("shiming--->onGotUserInfo" +e.detail.rawData)
  },
  //麻痹注意是那个事件啊 傻逼
  primary: function () {
    console.log("shiming dainle wo ")
    //console.log("shiming---" + types[i])
   // console.log("shiming---type" + type)
  //   pageObject[type] = function (e) {
  //     var key = type + 'Size'
  //     var changedData = {}
  //     changedData[key] =
  //       this.data[key] === 'default' ? 'mini' : 'default'
  //     this.setData(changedData)
  //   }
  },

}

//个人理解就是 通过这个方法，可以让用户改变按钮的大小 老子看不懂 那么可以自己写一个
//我可牛逼了 
//console.log("shiming--- types.length=" + types.length),
// for (var i = 0; i < types.length; ++i) {
//   (function (type) {
//     console.log("shiming---" + types[i])
//     console.log("shiming---type" + type)
//     pageObject[type] = function (e) {
//       var key = type + 'Size'
//       var changedData = {}
//       changedData[key] =
//         this.data[key] === 'default' ? 'mini' : 'default'
//       this.setData(changedData)
//     }
//   })(types[i])
// }

Page(pageObject)

// value	String		输入框的内容	
// placeholder	String		输入框为空时占位符	
// placeholder - style	String		指定 placeholder 的样式	
// placeholder - class String	textarea- placeholder	指定 placeholder 的样式类	
// disabled	Boolean	false	是否禁用	
// maxlength	Number	140	最大输入长度，设置为 - 1 的时候不限制最大长度	
// auto - focus	Boolean	false	自动聚焦，拉起键盘。
// focus	Boolean	false	获取焦点	
// auto - height	Boolean	false	是否自动增高，设置auto - height时，style.height不生效
// fixed	Boolean	false	如果 textarea 是在一个 position: fixed 的区域，需要显示指定属性 fixed 为 true	
// cursor - spacing	Number	0	指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor- spacing 指定的距离的最小值作为光标与键盘的距离	
// cursor	Number		指定focus时的光标位置	1.5.0
// show - confirm - bar	Boolean	true	是否显示键盘上方带有”完成“按钮那一栏	1.6.0
// selection - start	Number	- 1	光标起始位置，自动聚集时有效，需与selection - end搭配使用	1.9.0
// selection - end	Number	- 1	光标结束位置，自动聚集时有效，需与selection - start搭配使用	1.9.0
// adjust - position	Boolean	true	键盘弹起时，是否自动上推页面	1.9.90
// bindfocus	EventHandle		输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持	
// bindblur	EventHandle		输入框失去焦点时触发，event.detail = { value, cursor }
// bindlinechange	EventHandle		输入框行数变化时调用，event.detail = { height: 0, heightRpx: 0, lineCount: 0 }
// bindinput	EventHandle		当键盘输入时，触发 input 事件，event.detail = { value, cursor }， bindinput 处理函数的返回值并不会反映到 textarea 上
// 这个TextArea 应该是一个原生的控件  
Page({
  data: {
    focus: false
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  }
})


// bug: 微信版本 6.3.30，textarea 在列表渲染时，新增加的 textarea 在自动聚焦时的位置计算错误。
// tip: textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 bindsubmit。
// tip: 不建议在多行文本上对用户的输入进行修改，所以 textarea 的 bindinput 处理函数并不会将返回值反映到 textarea 上。
// tip: textarea 组件是由客户端创建的原生组件，它的层级是最高的，不能通过 z- index 控制层级。
// tip: 请勿在 scroll- view、swiper、picker - view、movable - view 中使用 textarea 组件。
// tip: css 动画对 textarea 组件无效。
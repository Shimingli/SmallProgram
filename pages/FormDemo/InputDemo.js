// bug: 微信版本 6.3.30, focus 属性设置无效；
// bug: 微信版本 6.3.30, placeholder 在聚焦时出现重影问题；
// tip: input 组件是一个 native 组件，字体是系统字体，所以无法设置 font- family；
// tip: 在 input 聚焦期间，避免使用 css 动画；




// 属性名	类型	默认值	说明	最低版本
// value	String		输入框的初始内容	
// type String	"text"	input 的类型	
// password	Boolean	false	是否是密码类型	
// placeholder	String		输入框为空时占位符	
// placeholder - style	String		指定 placeholder 的样式	
// placeholder - class String	"input-placeholder"	指定 placeholder 的样式类	
// disabled	Boolean	false	是否禁用
Page({
  data: {
    focus: false,
    inputValue: ''
  },
  //bindinput	EventHandle		键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，
  //2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //输入了 一个变成两个
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  }
})

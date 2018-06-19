


// min	Number	0	最小值	
// max	Number	100	最大值	
// step	Number	1	步长，取值必须大于 0，并且可被(max - min)整除	
// disabled	Boolean	false	是否禁用	
// value	Number	0	当前取值	
// color	Color	#e9e9e9	背景条的颜色（请使用 backgroundColor）
// selected - color	Color	#1aad19	已选择的颜色（请使用 activeColor）
// activeColor	Color	#1aad19	已选择的颜色	
// backgroundColor	Color	#e9e9e9	背景条的颜色	
// block - size	Number	28	滑块的大小，取值范围为 12 - 28	1.9.0
// block - color	Color	#ffffff	滑块的颜色	1.9.0
// show - value	Boolean	false	是否显示当前 value	
// bindchange	EventHandle		完成一次拖动后触发的事件，event.detail = { value: value }
// bindchanging	EventHandle		拖动过程中触发的事件，event.detail = { value: value }	1.7.0
var pageData = {}
for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
    }
  })(i);
}
Page(pageData)
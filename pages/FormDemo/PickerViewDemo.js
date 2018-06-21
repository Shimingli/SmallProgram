const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

// value	NumberArray	数组中的数字依次表示 picker- view 内的 picker- view - column 选择的第几项（下标从 0 开始），数字大于 picker- view - column 可选项长度时，选择最后一项。
// indicator - style	String	设置选择器中间选中框的样式	
// indicator - class String	设置选择器中间选中框的类名	1.1.0
// mask - style	String	设置蒙层的样式	1.5.0
// mask - class String	设置蒙层的类名	1.5.0
// bindchange	EventHandle	当滚动选择，value 改变时触发 change 事件，event.detail = { value: value }；value为数组，表示 picker- view 内的 picker- view - column 当前选择的是第几项（下标从 0 开始）

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 1, 1],
  },
  bindChange: function (e) {
    //本地的手机的时间  
    console.log("shiming date.getFullYear()=" +date.getFullYear())
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})
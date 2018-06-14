var initData = 'this is first line\nthis is second line'
var extraLine = [];
Page({
  //其实就是一个Text的文本的消息，只不过呢，把它给设置了换行
  data: {
    text: initData
  },
  //使用自有一个Text的文本，不断通过数组开始累加的啊 牛逼 ，感觉做的事情有点少啊啊啊啊啊 
  add: function (e) {
    //extraLine.forEach(Iterable) 
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function (e) {
    if (extraLine.length > 0) {
      for (var i in extraLine) {
        console.log("shiming 循环里面的数组-start-" + extraLine[i] + "---i=" + i)
      }
      //移除最后一个元素，返回自己
      extraLine.pop()
      //添加由指定分隔符字符串分隔的数组的所有元素。 extraLine.join('\n')
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
    console.log("shiming text remove=======" + initData)
    console.log("shiming text remove extraLine=======" + extraLine)
    for(var i in extraLine){
      console.log("shiming 循环里面的数组-stop-"+extraLine[i]+"---i="+i)
    }
  }
})
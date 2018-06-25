//canvas 标签默认宽度300px、高度225px
// 同一页面中的 canvas- id 不可重复，如果使用一个已经出现过的 canvas- id，该 canvas 标签对应的画布将被隐藏并不再正常工作 
Page({
  onReady: function () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }

    this.drawBall()
    this.interval = setInterval(this.drawBall, 17)
  },
  drawBall: function () {
    var p = this.position
    p.x += p.vx
    p.y += p.vy
    if (p.x >= 300) {
      p.vx = -2
    }
    if (p.x <= 7) {
      p.vx = 2
    }
    if (p.y >= 300) {
      p.vy = -2
    }
    if (p.y <= 7) {
      p.vy = 2
    }

    var context = wx.createContext()

    function ball(x, y) {
      context.beginPath(0)
      context.arc(x, y, 5, 0, Math.PI * 2)
      context.setFillStyle('#ff0000')
      context.setStrokeStyle('rgba(1,1,1,0)')
      context.fill()
      context.stroke()
    }
    //初始化了8个点，每个点的位置都不一样，同时
    ball(p.x, 150)
    ball(150, p.y)
    ball(300 - p.x, 150)
    ball(150, 300 - p.y)
    ball(p.x, p.y)
    ball(300 - p.x, 300 - p.y)
    ball(p.x, 300 - p.y)
    ball(300 - p.x, p.y)

    wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions()
    })
  },
  onUnload: function () {
    clearInterval(this.interval)
  },
  annotherdemo :function(){
     wx.navigateTo({
       url: '/pages/Canvas/CanvasDemoAnother',
     })
  },
})

// 缩放	scaleToFill	不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
// 缩放	aspectFit	保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
// 缩放	aspectFill	保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
// 缩放	widthFix	宽度不变，高度自动变化，保持原图宽高比不变
// 裁剪	top	不缩放图片，只显示图片的顶部区域
// 裁剪	bottom	不缩放图片，只显示图片的底部区域
// 裁剪	center	不缩放图片，只显示图片的中间区域
// 裁剪	left	不缩放图片，只显示图片的左边区域
// 裁剪	right	不缩放图片，只显示图片的右边区域
// 裁剪	top left	不缩放图片，只显示图片的左上边区域
// 裁剪	top right	不缩放图片，只显示图片的右上边区域
// 裁剪	bottom left	不缩放图片，只显示图片的左下边区域
// 裁剪	bottom right	不缩放图片，只显示图片的右下边区域
Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
     src: '/images/cat.jpg'//可以使用本地的图片，也可以使用网络的图片
      //src:"https://upload-images.jianshu.io/upload_images/5363507-1c753d83dd58eb08.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  errorFunction :function(){
     console.log("shiming 发生错误了")
  },
  bindloadFunction :function(){
     console.log("shiming 图片加载完成了")
  }
})
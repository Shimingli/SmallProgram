//从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，
//多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。
Page({
  data: {
    array: ['美国', '中国', '巴西', '日本',"dd"],//其实这里面已经给你 定义好了 
    index: 1,//主要是解决下取得那个值 这样子的东西
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ], [
        {
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 3,
          name: '节肢动物'
        }
      ], [
        {
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',//value	String		表示选中的时间，格式为"hh:mm" 
    // region: ['广东省', '广州市', '非洲'],//找到不非洲的话，就不显示
    region: ['广东省', '广州市', '天河区'],//找到不非洲的话，就不显示
    customItem: '我是仕明'
  },
  //bindchange	EventHandle		value 改变时触发 change 事件，event.detail = {value: value}	
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
//   range	二维Array / 二维Object Array	[]	mode为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[["a", "b"], ["c", "d"]]	
// range-key	String		当 range 是一个 二维Object Array 时，通过 range- key 来指定 Object 中 key 的值作为选择器显示内容	
// value	Array	[]	value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）
//   bindchange	EventHandle		value 改变时触发 change 事件，event.detail = { value: value }	
// bindcolumnchange	EventHandle		某一列的值改变时触发 columnchange 事件，event.detail = { column: column, value: value }，column 的值表示改变了第几列（下标从0开始），value 的值表示变更值的下标	
// bindcancel	EventHandle		取消选择时触发	1.9.90
// disabled	Boolean	false	是否禁用

//多久执行呢 ，执行的时机在 点了选择框的确定按钮 就会执行    
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
          // 其实就是通过不断的改变其后面数组的值，但是我觉得好像不太灵活，而且性能也是个大问题啊
          //还真的不好搞，这个东西
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  // value	String		表示选中的时间，格式为"hh:mm"	
// start	String		表示有效时间范围的开始，字符串格式为"hh:mm"	
// end	String		表示有效时间范围的结束，字符串格式为"hh:mm"	
// bindchange	EventHandle		value 改变时触发 change 事件，event.detail = { value: value }	

// disabled	Boolean	false	是否禁用
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
// bindcancel	EventHandle		取消选择时触发	1.9.90
  bindTimecancel :function(){
    console.assert("取消了")
    console.log("shiming 取消了")
  },


  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})
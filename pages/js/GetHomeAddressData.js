function getlist() {
  //这里我封装了请求，如果你不需要多次利用到这个请求就不需要像我这样封装，需要在哪里请求就在哪里写这个请求               
  var that = this  // 避免this指向不明，在小程序里面常常会这样做
  wx.request({
    url: app.globalData.homeAddressUrl,
    header: {
      'content-type': 'application/text' // 默认值     
    },
    // success(res) {
    //   console.log(res.data);
    //   var resultAreaList=res.data;
    //   console.log(resultAreaList);
    // },
    success: res => {
      this.areaList = res.data;
      console.log(this.areaList);
    },

    fail: function (err) { console.log(err); },//请求失败
    complete: function () { }//请求完成后执行的函数
  })
}
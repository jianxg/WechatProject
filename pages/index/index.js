//index.js
//获取应用实例
const app = getApp()
Page({
  
	data: {
		motto: '',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},

	//事件处理函数
	bindViewTap: function () {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	homeAddClick: function () {
		wx.navigateTo({
			url: '../SelectAddress/HomeAddress'
		})
	},


  getClick: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:65147/api/values/getData',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var list = res.data.list;
        if (list == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            list: list
          })
        }
      }
    })
  },

  postClick: function()
  {
    wx.request({
      url: "http://localhost:65147/api/values/add",
      method: "POST",
      data: {
        code: "110000",
        name: "陕西省",
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        wx.navigateBack({
          delta: 1  //小程序关闭当前页面返回上一页面
        })
        wx.showToast({
          title: '新增成功！',
          icon: 'success',
          duration: 2000
        })
      },
    })
  },

  getJsonClick:function()
  {
    
  },

	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
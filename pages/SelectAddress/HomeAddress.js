// pages/SelectAddress/HomeAddress.js
const app=getApp();
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
    areaList: app.globalData.areaList1, 
		show: false,
	},
 
	onConfirm(event) {
		console.log(event)
		console.log('省选择完成，携带值为', event.detail.values[0].name),
		console.log('市选择完成，携带值为', event.detail.values[1].name),
		console.log('县选择完成，携带值为', event.detail.values[2].name),
		wx.showToast({
			title: '您选择了：' + event.detail.values[0].name + '-' + event.detail.values[1].name + '-' + event.detail.values[2].name,
			icon: 'none',
			duration: 2000
		})
	},

	showPopup() {
		this.setData({
			show: true
		});
	},

	onClose() {
		this.setData({
			show: false
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})
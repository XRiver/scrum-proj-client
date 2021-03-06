// pages/summary/summary.js
const util = require('../../../utils/util.js')
const api = require('../../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    api.getJoinedPlanByOpenId({
      data: {
        openid: wx.getStorageSync('openid'),
        state: "2"
      },
      success: (res) => {
        console.log(res)
        for (let trip of res) {
          let date = new Date(parseInt(trip.traveltime))
          let format_time = util.formatTime(date)
          trip['formatTime'] = format_time

          for (let summary of trip.summaryList) {
            let picUrlsArr = summary.picUrls.split(",")
            summary['picUrlsArr'] = picUrlsArr
            let date = new Date(summary.createDate)
            let format_time = util.formatTime(date)
            summary['formatTime'] = format_time
          }
        }
        that.setData({
          trips: res
        })
      }
    })
  },
  comment: function (event) {
    const pid = event.target.dataset.pid
    // console.log(pid)
    wx.redirectTo({
      url: `../comment/comment?pid=${pid}`,
    });
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
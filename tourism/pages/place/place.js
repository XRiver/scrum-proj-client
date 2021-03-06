// pages/place/place.js
const api = require('../../utils/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    place:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    const id = options.id;
    this.setData({
      id:id
    })
    api.getAttractionById({
      data:{
        aid:id
      },
      success:(res)=>{
        this.setData({
          place: res[0]
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // const that = this;
    // wx.setNavigationBarTitle({
    //   title: that.data.trip.aname,
    // });
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

  },

  addTrip:function(){
    const id = this.data.id
    wx.navigateTo({
      url: `../trip_add/trip_add?id=${id}`,
    });
  }
})
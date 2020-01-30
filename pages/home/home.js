const app = getApp()
const globalname = app.globalData.name
const globalage = app.globalData.age

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'guming',
    movies: [
      {name: '111', year:'1111'},
      {name: '222', year: '2222'},
      { name: '333', year: '3333' }
    ],
    counter: 0,
    globalname: globalname,
    globalage: globalage
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

  },

  addCount: function(){
    // 错误做法
    // console.log("aaa")
    // this.data.counter += 1
    this.setData({
      counter: this.data.counter + 1
    })
  },

  subCount: function() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})
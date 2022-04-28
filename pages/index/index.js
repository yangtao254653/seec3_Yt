const app = getApp()
import myrequest from "../../utils/myrequest";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: null,
    navs:null,
    data:null,
  },
  async getbanner(){
    let {data} = await myrequest({
      url:"/home/swiperdata"
    })
    this.setData({
      banners:data.message
    })
  },
  async getnavs(){
    let {data} = await myrequest({
      url:"/home/catitems"
    })
    this.setData({
      navs:data.message
    })
  },
  async getfloordata(){
    let {data} = await myrequest({
      url:"/home/floordata"
    })
    this.setData({
      data:data.message
    })
  },
  fn(){
    wx.redirectTo({
      url: '../search/search'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getbanner()
      this.getnavs()
      this.getfloordata()
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
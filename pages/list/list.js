// pages/list/list.js
let app =  getApp();
import myrequest from "../../utils/myrequest";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey: 0,
        date:null,
        dat:null,
        index:1
    },

    async getdat(){
        let {data} = await myrequest({
          url:"/categories"
        })
        this.setData({
          date:data.message,
          dat:data.message[0].children
        })
    },

    getid(e){
        let index = e.detail;
        let child = this.data.date[index].children
        this.setData({
            dat: child
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getdat()
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
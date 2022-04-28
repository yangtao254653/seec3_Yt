// pages/search/search.js
import myrequest from "../../utils/myrequest";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        text:null,
        data:null
    },

    gettxt(e){
        this.setData({
            txt: e.detail
        })
    },
    async getdata(){
        let {data} = await myrequest({
          url:"/goods/qsearch?query=" + this.data.txt,
          success(res){
              console.log(res);
          }
        });
        this.setData({
          data:data.message
        })
        console.log(data);
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
let myrequest = (options) => {
    let url = "https://api-hmugo-web.itheima.net/api/public/v1" + options.url;
    return new Promise((resolve, reject) => {
        wx.request({
            ...options,
            url,
            success(res) {
                resolve(res);
            },
            fail(err){
                reject(err);
            }
        })
    })
}

export default myrequest;
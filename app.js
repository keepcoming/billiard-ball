// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  request: function (object) {
    wx.request({
      url: object.url,
      header: object.header || {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: object.data || {},
      method: object.method || "GET",
      dataType: object.dataType || "json",
      success: function (res) {
        if (object.success)
          object.success(res.data);
      },
      fail: function (res) {
        if (object.fail)
          object.fail(res);
      },
      complete: function (res) {
        if (object.complete)
          object.complete(res);
      }
    });
  },
})

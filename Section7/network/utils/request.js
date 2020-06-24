const headerUrl = "http://jsonplaceholder.typicode.com/";

function httpReuqest(url, method, data, header) {
  var requestUrl = url;
  if (url.indexOf('http') == -1) {
    requestUrl = headerUrl + url;
  }
  data = data || {};
  header = header || {};
  wx.showNavigationBarLoading();
  let promise = new Promise(function(resolve, reject) {
    wx.request({
      url: requestUrl,
      header: header,
      data: data,
      method: method,
      success: function(res) {
        resolve(res);
      },
      fail: reject,
      complete: function() {
        wx.hideNavigationBarLoading();
      }
    });
  });
  return promise;
}

module.exports = {
  headerUrl: headerUrl,
  "get": function(url, data, header) {
    return httpReuqest(url, "GET", data, header);
  },
  "post": function(url, data, header) {
    return httpReuqest(url, "POST", data, header);
  }
};
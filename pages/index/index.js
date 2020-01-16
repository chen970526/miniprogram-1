Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchtext:'搜索',
    // news:[
    //   { id: 1, name: '项目1' },
    //   { id: 2, name: '项目2' },
    //   { id: 3, name: '项目3' },
    //   {id:4,name:'项目4'},
      
    // ]
    swiperlist:[],
    fenlei:[],
    floorList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata', //仅为示例，并非真实的接口地址
      success: (res) => {
        this.setData({
          swiperlist: res.data.message
        })
        // console.log(this.swiperlist)
      }
    }),
     wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems', //仅为示例，并非真实的接口地址
      success: (res) => {
        
        this.setData({
          fenlei: res.data.message
        })
      }
      }),
      wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata', //仅为示例，并非真实的接口地址
        success: (res) => {
          console.log(res)
          this.setData({
            floorList: res.data.message
          })
          
        }
      })

    console.log(this.floor)
  }, 
  onMyTab(e) {
    console.log(e.detail);
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
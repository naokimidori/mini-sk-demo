const app = getApp()

Page({
  data: {
    region: ['四川省', '成都市', '武侯区'], // 用于回显
    cityCode: '', // 城市code
    cityName: '成都',
    swiperData: [
      {
        picUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
        jumpUrl: '', // 跳转地址，若需要
      },
      {
        picUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        jumpUrl: '',
      }
    ],
    cardList: [
      {
        avatar: 'https://ossweb-img.qq.com/images/lol/img/champion/Taric.png',
        name: '塔里克',
        desc: '用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。',
        jumpUrl: ''
      },
      {
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg',
        name: 'EZ',
        desc: '等我回来一个打十个',
        jumpUrl: ''
      },
    ]
  },
  onLoad() {
    
  },
  // 选择城市
  bindRegionChange(e) {
    const { postcode = '', value = [] } = e.detail || {};
    this.setData({
      cityCode: postcode,
      region: value,
      cityName: value[1].replace('市', '')
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

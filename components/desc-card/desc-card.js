// components/desc-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cardData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapCard(e) {
      console.log('handleTapCard', e.currentTarget.dataset.url)
      const { dataset = {} } = e.currentTarget || {}
      const { url = '' } = dataset;
      if (url) {
        wx.navigateTo({
          url,
        })
      }
    }
  }
})

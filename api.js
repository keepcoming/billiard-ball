const API_BASE_URL = 'https://www.yxgxkj.com';
// const API_BASE_URL = 'http://localhost:8080';
const API_REQUEST_URL = API_BASE_URL + '/wechat/'
module.exports = {
  helpCenter: {
    listAllList: API_REQUEST_URL + 'helpCenter/listAllList',
  },
  cyclePic:{
    getAllCyclePic: API_REQUEST_URL + 'cyclePic/getAllCyclePic',
  },
  consumer:{
    getOpenId: API_REQUEST_URL + 'consumer/getOpenId',
    getPhoneNum: API_REQUEST_URL + 'consumer/getPhoneNum',
    getConsumerInfo: API_REQUEST_URL + 'consumer/getConsumerInfo',
    getConsumerCouponConfig: API_REQUEST_URL + 'consumer/getConsumerCouponConfig',
    relevanceConsumerStore: API_REQUEST_URL + 'consumer/relevanceConsumerStore',
  },
  storedValueActivity:{
    getNormalStoredValueActivity: API_REQUEST_URL + 'storedValueActivity/getNormalStoredValueActivity',
    goToRecharge: API_REQUEST_URL + 'storedValueActivity/goToRecharge',
    cancelOrder: API_REQUEST_URL + 'storedValueActivity/cancelOrder',
  },
  store:{
    getStoreByArea: API_REQUEST_URL + 'store/getStoreByArea',
    getStoreByCity: API_REQUEST_URL + 'store/getStoreByCity',
    getNearestCityByCoordinate: API_REQUEST_URL + 'store/getNearestCityByCoordinate',
  },
  storeRoom:{
    getNormalStoreRoom: API_REQUEST_URL + 'storeRoom/getNormalStoreRoom',
    getStoreRoom: API_REQUEST_URL + 'storeRoom/getStoreRoom',
    getRoomDailyInfo: API_REQUEST_URL + 'storeRoom/getRoomDailyInfo',
  },
  consumerOrder: {
    getOrderByHour: API_REQUEST_URL + 'consumerOrder/getOrderByHour',
    getOrderByPartTime: API_REQUEST_URL + 'consumerOrder/getOrderByPartTime',
    orderSubmit: API_REQUEST_URL + 'consumerOrder/orderSubmit',
    getStoreRoomApply: API_REQUEST_URL + 'consumerOrder/getStoreRoomApply',
    orderTeamApplySubmit: API_REQUEST_URL + 'consumerOrder/orderTeamApplySubmit',
    getCurrentStartTimeOrder: API_REQUEST_URL + 'consumerOrder/getCurrentStartTimeOrder',
    getOrderListByConsumerId: API_REQUEST_URL + 'consumerOrder/getOrderListByConsumerId',
    getOrderById: API_REQUEST_URL + 'consumerOrder/getOrderById',
    cancelOrderNoPay: API_REQUEST_URL + 'consumerOrder/cancelOrderNoPay',
    cancelOrder: API_REQUEST_URL + 'consumerOrder/cancelOrder',
    earlyTerminationOrder: API_REQUEST_URL + 'consumerOrder/earlyTerminationOrder',
    handleApplyTeam: API_REQUEST_URL + 'consumerOrder/handleApplyTeam',
    myYearOrder: API_REQUEST_URL + 'consumerOrder/myYearOrder',
    updateOrderStatusById: API_REQUEST_URL + 'consumerOrder/updateOrderStatusById',
  },
  helpTeachOrder:{
    getCurrentTeachHelpOrder: API_REQUEST_URL + 'helpTeachOrder/getCurrentTeachHelpOrder',
    getTeachHelp: API_REQUEST_URL + 'helpTeachOrder/getTeachHelp',
    establishTeachOrder: API_REQUEST_URL + 'helpTeachOrder/establishTeachOrder',
    handleEnsureCome: API_REQUEST_URL + 'helpTeachOrder/handleEnsureCome',
    cancelOrder: API_REQUEST_URL + 'helpTeachOrder/cancelOrder',
  },
  WxPay:{
    prePay: API_REQUEST_URL + 'wxpay/prePay',
    getConfigByKey: API_REQUEST_URL + 'getConfigByKey?configKey=ball_help_teach_amount',
  },
  aqara:{
    openAll: API_REQUEST_URL + 'aqara/deviceResource/openAll',
    openTheDoor: API_REQUEST_URL + 'aqara/deviceResource/openTheDoor',
  },
  couponConfig:{
    getNotExistCouponConfig: API_REQUEST_URL + 'couponConfig/getNotExistCouponConfig',
    oneClickClaimCouponConfig: API_REQUEST_URL + 'couponConfig/oneClickClaimCouponConfig',
  }

};

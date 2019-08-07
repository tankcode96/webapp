import $http from './api-helpper'

/**
 * 首页数据
 */
export const homeData = () => $http({url: '/home/data'})

/**
 * 登陆
 */
export const userLogin = (username, password) => $http({ url: '/user/login.do', data: {
  username,
  password
}});

/**
 * 检查用户登录状态
 */
export const checkLogin = () => $http({ url: '/user/get_user_info.do' });

/**
 * 购物车列表 h
 */
export const cartList = () => $http({url: '/cart/list.do'});


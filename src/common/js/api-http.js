import $http from './api-helpper'

/**
 * 首页数据
 */
export const homeData = () => $http('/home/data')

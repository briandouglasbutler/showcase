import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const fetch = {
  formatUrl: () => `/daily/message/`,
  request: (url) => axiosWrapper.get(url),
}



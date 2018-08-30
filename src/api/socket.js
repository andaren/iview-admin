import axios from '@/libs/api.request'

export const getCount = () => {
  return axios.request({
    url: 'http://121.199.2.163:12001/nio/count/all',
    method: 'get'
  })
}

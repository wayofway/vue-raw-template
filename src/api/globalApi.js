import request from '@/utils/request'

export function testAPI() {
  return request({
    url: '/employInfo',
    method: 'get',
  })
}

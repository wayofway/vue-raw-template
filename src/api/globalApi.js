import request from '@/utils/request'

export function mockApi() {
  return request({
    url: '/mock/test',
    method: 'get',
  })
}

export default class Request {
  static getRequest({
    url,
    method = 'GET',
    data = {},
    headers = {},
    timeout = 0
  }) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.timeout = timeout
      xhr.setRequestHeader('appkey', baseConfig.APPKEY)
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(JSON.parse(xhr.response))
          } catch (err) {
            reject(new Error('Invalid JSON response'))
          }
        }
      }

      xhr.onerror = () => {
        reject(new Error('Request failed'))
      }

      xhr.ontimeout = () => {
        reject(new Error('Request time out'))
      }
      if (['GET', 'HEAD'].includes(method)) {
        xhr.send()
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(data)
      }
    })
  }
}

ajax({
  url: 'https://www.baidu.com',
  method: 'GET'
})
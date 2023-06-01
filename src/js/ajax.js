class Request {
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


function myAjax({url, method = 'GET', headers = {}, data = {}, timeout = 0}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(url, method, true)
    xhr.setRequestHeader('token', 'xxx')
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const res = JSON.parse(xhr.response)
        } catch(err) {
          reject(new Error('JSON parse failed'))
        }
      } else {
        reject(new Error('Request failed with'))
      }
    }
    xhr.onerror = () => {
      reject(new Error('Request Error'))
    }
    xhr.ontimeout = () => {
      reject('Request timeout')
    }
    if (['GET', 'PUT'].includes(method)) {
      xhr.send()
    } else {
      xhr.setRequestHeader('Content-type', 'application/json')
    }
  })
}
function ajax(options) {
  const {
    url,
    method = 'GET',
    data = {}
  } = options
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    console.log(xhr)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('token', 'json')
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.responseText)
      }
    }
    if (['HEAD', 'GET'].includes(method)) {
      xhr.send(null)
    } else {
      xhr.send(data)
    }
  })
}

ajax({
  url: 'https://www.baidu.com',
  method: 'GET'
})
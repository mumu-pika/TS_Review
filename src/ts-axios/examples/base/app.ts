import axios from '../../src/index'

// Request URL: http://localhost:8080/base/get?foo[]=bar&foo[]=baz
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz']
  }
})

// Request URL: http://localhost:8080/base/get?foo=%7B%22bar%22:%22baz%22%7D
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }
})

// Request URL: http://localhost:8080/base/get?date=2023-01-01T09:33:02.168Z
const date = new Date()
axios({
  method: 'get',
  url: '/base/get',
  params: {
    date
  }
})

// Request URL: http://localhost:8080/base/get?foo=@:$,+
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: '@:$, '
  }
})

// Request URL: http://localhost:8080/base/get?foo=bar&bar=baz
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: 'bar',
    baz: null
  }
})

// Request URL: http://localhost:8080/base/get?foo=bar
axios({
  method: 'get',
  url: '/base/get#hash',
  params: {
    foo: 'bar'
  }
})

// Request URL: http://localhost:8080/base/get?foo=bar&bar=baz
axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
})

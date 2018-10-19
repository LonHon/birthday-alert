const request = require('request')

function senter (m) {
  const requestData = {
    text: m.title,
    desp: m.content
  }
  console.log('已发送' + new Date())
  const url = '' // 这里换成自己的Server酱key
  if (url === '') return console.log('senter.js 需添加url！')
  request.post(url).form(requestData)
}

module.exports = senter

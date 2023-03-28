const request = require('request')

function senter (m) {
  try {
    const requestData = {
      text: m.title,
      desp: m.content
    }
    const url = `https://sctapi.ftqq.com/${process.env.SERVERCHAN_SECRETKEY}.send?title=`+ encodeURIComponent(m.content) // 这里换成自己的Server酱key
    if (url === '') return console.log('senter.js 需添加url！')
    request.post(url).form(requestData)
  } catch (e) {
    console.log(e);
  }
}

module.exports = senter

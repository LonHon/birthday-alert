
const path = require('path') //系统路径模块
const fs = require('fs') //文件模块
const request = require('request')

let todayLunar = null

function getTodayLunar () {
  const opt = {
    url: 'https://www.sojson.com/open/api/lunar/json.shtml',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
    }
  }
  return new Promise((resolve, reject) => {
    request.get(opt, (err, res, body) => {
      if (!err && res.statusCode == 200) {
        todayLunar = JSON.parse(body)
        resolve()
      } else {
        console.log(err)
      }
    })
  })
}

function getData() {
  //读取json文件
  return new Promise((resolve, reject) => {
    const file = path.join(__dirname, '../data/data.json')
    fs.readFile(file, 'utf-8', function(err, data) {
      if (err) {
        console.log(err)
      } else {
        resolve(data)
      }
    })
  })
}

// 判断农历生日

// 判断公历生日

// 判断生日
function birthIsNear(birth, type = 1) {
  return new Promise((resolve, reject) => {
    let next = 999
    const birthArr = birth.split('/')
    const m = birthArr[1]
    const d = birthArr[2]
    const today = type == 1 ? [todayLunar.data.lunarMonth, todayLunar.data.lunarDay] : [(new Date()).getMonth() +1, (new Date()).getDate()]
    const lm = today[0]
    const ld =  today[1]
    if (m == lm) {
      next = d - ld
    }
    resolve(next)
  })
}

async function scaner() {
  await getTodayLunar()
  const list = JSON.parse(await getData())
  let result = []
  for (const item of list) {
    const n = await birthIsNear(item.birth)
    if (n > -1 && n < 8) {
      // 可用符号 '@ ， 。 . 卐 _'
      result.push({
        name: item.name,
        day: n,
        msg: `@${item.name}_${n}天`
      })
    }
  }
  result = result.sort((a, b) => a.day - b.day)
  return result
}
module.exports = scaner
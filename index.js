const scaner = require('./func/scaner.js')
const senter = require('./func/senter.js')

const schedule = require('node-schedule')


async function main() {
  schedule.scheduleJob('0 30 7 * * *', () => {
    const sentMsg = {
      title: '生日提醒',
      content: ''
    }
    scaner().then(list => {
      if (list.length > 0) {
        for (const l of list) {
          sentMsg.content += `${l.msg}，`
        }
      } else {
        sentMsg.title = '今天也是充满希望的一天~'
      }
      senter(sentMsg)
    })
  })
}
main()

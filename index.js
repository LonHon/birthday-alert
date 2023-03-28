const scaner = require('./func/scaner.js')
const senter = require('./func/senter.js')

async function main() {
  const sentMsg = {
    title: '生日提醒',
    content: ''
  }
  scaner().then(list => {
    if (list.length > 0) {
      for (const l of list) {
        sentMsg.content += `${l.msg}`
      }
    } else {
      sentMsg.title = '今天也是充满希望的一天~'
    }
    console.log(sentMsg);
    senter(sentMsg)
  }).catch(e => {
    console.log('scaner error: ', e);
  })
}
main()

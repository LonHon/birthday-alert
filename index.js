const scaner = require('./func/scaner.js')
const senter = require('./func/senter.js')

async function main() {
    const sentMsg = {
      title: '',
      content: ''
    }
    scaner().then(list => {
      if (list.length > 0) {
        for (const l of list) {
          sentMsg.title += `${l.msg}，`
        }
        senter(sentMsg)
      } else {
        sentMsg.title = '今天也是充满希望的一天~'
        senter(sentMsg)
        // 暂时屏蔽
      }
    })
}
main()

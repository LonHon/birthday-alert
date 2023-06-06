### 简介
目前，这是一个**微信推送生日信息**的项目，每早扫描最近7天过生日的好友并进行微信推送。

![微信推送][1]

迫于自己生日时别人会来电、短讯问候，别人生日自己却老忘，十分恼火。

之前用的 **生日某家app** 还算能满足需求，但是后面强行上电商、资讯这些玩意，而且经常 **推送辣鸡广告**，原本的生日推送都不能正常使用 本末倒置，索性关闭推送，当记事本用了。

想到自己每天都在用微信，弄个微信推送生日信息应该就能提前看到了~

### 2022/12/28 Updates:
添加 Github Actions 每日触发+

### 使用方法
#### 步骤1
f....fork me for free?

#### 步骤2
回到自己fork的项目下，Settings/secrets 下添加 BIRTH_DATA 和 SERVERCHAN_SECRETKEY

BIRTH_DATA 文本格式如下(type:0或空为农历，1为公历)：

```
[
    {"name":"女朋友A","birth":"2004/9/8", "type": 1},
    {"name":"女朋友B","birth":"2004/9/9"},
    {"name":"女朋友C","birth":"2004/9/10", "type": 0}
]
```

![数据添加][3]

#### 步骤3

随便改改README.md的内容（加个空格啥的），推送到你fork的仓库上，以此触发Action

### 用到的东西
主要使用： GitHub Action + [Server酱][2]

注册Server酱账号、扫码绑定微信号、关注接收消息的公众号、**获取发送消息的url**

### 最后

> 车遥遥，马憧憧，君游东山东复东。

TODO：
* [x] 1. 目前只有农历生日判断，需添加一个公历生日的判断
* [ ] 2. 做个分级？比如A级，提前7天提醒，B级提前3天，C级当天提醒。


  <!-- [1]: https://i.loli.net/2018/10/19/5bc979a5a5253.png -->
  [1]: https://raw.githubusercontent.com/LonHon/birthday-alert/master/docs/msg-preview.jpg
  [2]: https://sc.ftqq.com/3.version
  [3]: https://raw.githubusercontent.com/LonHon/birthday-alert/master/docs/add-data.png
  <!-- [3]: https://i.loli.net/2018/10/19/5bc989a14e9f5.png -->
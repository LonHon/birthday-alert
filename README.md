### 简介
目前，这是一个**微信推送生日信息**的项目

迫于有时自己生日别人会来电、短讯之类，别人生日自己却记不住，十分恼火.

之前用的 **生日某家app** 还算能满足需求，但是后面强行上电商、资讯这些玩意，而且经常**推送辣鸡广告**，原本的生日推送都不能正常使用 本末倒置。

### 用到的东西
主要使用： Node + [Server酱][1]
建议搭配pm2来食用


### 使用方法
```
git clone https://github.com/LonHon/birth-manage.git

cd birth-manage/

# data/ 下添加data.json
# func/scaner.js 中添加Server酱发送消息的key

npm install

node index.js

```
- data.json格式如下(isLunar:1为农历生日)：
```
[
    {"name":"女朋友A","birth":"2000/9/8", "isLunar": 1},
    {"name":"女朋友B","birth":"2000/9/9", "isLunar": 0},
]
```

#### 项目代码主要功能：
1. data/data.json 提供生日数据
2. func/scaner.js 扫描生日数据，提取7天内过生日的数据。
3. func/senter.js 调用Server酱，实现消息发送
4. index.js 开启定时任务，每天早上7.30扫描并推送

#### Server酱主要功能
提供微信推送功能，这样就不用自己去搞一个公众号再配置了.

### 最后

> 车遥遥，马憧憧，君游东山东复东。

可以提供免费挂服务，限10位，需要的可以把Server酱的key和data.json发到我的邮箱 lonhontop@gmail.com

TODO：
1. 目前只有农历生日判断，需添加一个公历生日的判断

  [1]: https://sc.ftqq.com/3.version
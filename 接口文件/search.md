查询接口http://139.199.5.64/BJTU/index.php/home/index/search

| 参数名称（输入）      | 含义     | 获取方式 | 类型         | 举例                        |
| ------------- | ------ | ---- | ---------- | ------------------------- |
| key           | 关键字（搜索 | post | string     | 软件                        |
| 返回参数(输出)      |        |      |            |                           |
| topicName     | 话题名字   | json | string     | 美食                        |
| topicUrl      | 话题图片   | json | string     | http://139.199.5.64/2.jpg |
| content       | 问题内容   | json | string     | "出国，工作？"                  |
| pid           | 话题的id  | json | int        | 1                         |
| name          | 给出回答的人 | json | string     | 张煊                        |
| creattime     | 创建时间   | json | time       | 2017-12-1 12:00:00        |
| answercontent | 回答内容   | json | string（62） | 当然是出国了而我对VB本无···          |
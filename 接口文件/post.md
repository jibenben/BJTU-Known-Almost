发帖接口设计Http://139.199.5.64/index.php/home/index/post

| 输入参数    | 含义   | 方式   | 类型      | 举例         |
| ------- | ---- | ---- | ------- | ---------- |
| topicid | 话题选择 | post | int     | 1          |
| content | 问题描述 | post | string  | 交大附近比较好的环境 |
| uid     | 用户   | post | id      | 2          |
| 输出参数    |      |      |         |            |
| result  | 发帖结果 | json | boolean | true/fals  |

发帖页面话题加载Http://139.199.5.64/index.php/home/topic

| 输出参数  | 含义   | 方式   | 类型     | 举例   |
| ----- | ---- | ---- | ------ | ---- |
| id    | 话题ID | json | int    | 1    |
| topic | 话题   | json | string | 生活   |
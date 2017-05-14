 回答接口设计Http://139.199.5.64/index.php/home/index/answer

| 传入参数      | 含义    | 方式   | 类型      | 举例                      |
| --------- | ----- | ---- | ------- | ----------------------- |
| userid    | 用户ID  | post | int     | 1                       |
| postid    | 帖子的ID | post | int     | 1                       |
| answerurl | 图片    | post | file    | 234.jpg                 |
| answer    | 回答内容  | post | string  | 这个问题很事简单，每次考试的时候基本都会有往年 |
| 传出参数      |       |      |         |                         |
| result    | 回答结果  | json | boolean | true/fals               |

点击回答时候ajax(判断用户是否可以回复请求)请求http://139.199.5.64/index.php/home/answer/index

| 传入参数   | 含义       | 方式   | 类型      | 举例         |
| ------ | -------- | ---- | ------- | ---------- |
| userid | 用户的ID    | post | int     | 1          |
| 输出参数   |          |      |         |            |
| result | 用户是否可以回复 | json | boolean | true/false |
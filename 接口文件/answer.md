 回答接口设计Http://139.199.5.64/index.php/home/index/answer

| 传入参数    | 含义    | 方式   | 类型      | 举例                      |
| ------- | ----- | ---- | ------- | ----------------------- |
| uid     | 用户ID  | post | int     | 1                       |
| pid     | 帖子的ID | post | int     | 1                       |
| image   | 图片    | post | file    | 234.jpg                 |
| content | 回答内容  | post | string  | 这个问题很事简单，每次考试的时候基本都会有往年 |
| 传出参数    |       |      |         |                         |
| result  | 回答结果  | json | boolean | true/false              |



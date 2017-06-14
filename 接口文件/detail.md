问题详情展示http://139.199.5.64/index.php/home/index/detail

| 传入参数                | 含义     | 方式           | 类型     | 举例                                       |
| ------------------- | ------ | ------------ | ------ | ---------------------------------------- |
| pid                 | 问题id   | post         | int    | 1                                        |
| 传出参数                |        |              |        |                                          |
| posttitle           | 问题标题   | json (post)  | string | *java*初学者，如何学习*java*？                    |
| postcontent         | 问题内容   | json(post)   | string | 更新:好久没更新的我来说明一个问题,就是疯狂*java*是可以当成api那种来查阅每个方法的.如果你想要深入理解*java*中的每个概念,还是推荐大家买thinking in *java*,英文好的读英文版,不好的读中文版.- |
| uname               | 提问用户姓名 | json(post)   | string | 张煊                                       |
| postcreatetime      | 帖子创建时间 | json(post)   | data   | 2012-05-02 19:00:00                      |
| anuname             | 回答人名字  | json(answer) | string | 大神                                       |
| uimage              | 回答人头像  | json(answer) | string | http://139.199.5.64/bjtu/12.jpg          |
| answer              | 回答内容   | json(answer) | string | 作者：张同学                                   |
| answerLikeNumber    | 回答点赞数  | json(answer) | int    | 2                                        |
| answercommentNumber | 回答的评论数 | json(answer) | int    | 8                                        |




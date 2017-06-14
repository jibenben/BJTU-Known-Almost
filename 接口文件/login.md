登录接口http://139.199.5.64/BJTU/index.php/home/user/login

| 输入参数名称   | 含义        | 方式   | 类型      | 例子         |
| -------- | --------- | ---- | ------- | ---------- |
| name     | 用户的名字（邮箱） | post | string  | 张煊         |
| password | 用户的密码     | post | string  | 123456     |
| 输出参数     |           |      |         |            |
| result   | 结果        | json | boolean | true/false |
| uid      | 用户ID      | json | int     | 1          |
| type     | 用户类型      | json | int     | 1：校内  2：校外 |


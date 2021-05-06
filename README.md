# 修改于 HoPGoldy/my-screeps-ai

## 准备

**安装依赖**

```bash
# nodejs >= 10.13.0
npm install
```

**添加密钥**

在根目录下新建 `.secret.json` 文件，并填入以下内容:

```js
{
    "main": {
        "token": "YOUR_TOKEN_HERE",
        "protocol": "https",
        "hostname": "screeps.com",
        "port": 443,
        "path": "/",
        "branch": "default"
    },
    "local": {
        "copyPath": "../screeps-dist"
    }
}
```

## 使用

向服务器自动提交代码（需要填写 `.secret.json` 中 `main.token` 字段）

```
npm start
```

向本地目录自动提交代码（需要填写 `.secret.json` 中 `local.copyPath` 字段）

```
npm run local
```

启动开发环境 (只会执行 ts 编译, 不提交代码)

```
npm run build
```

## 设计

访问 [/doc](https://github.com/snmlm/screeps-ai/tree/master/doc) 来查看设计细节。

## 脚手架工具

Yeoman:
https://yeoman.io/

## 文件读操作

// readFile
//writeFile

## Node 是什么？

Node.js 是一个 JavaScript 运行平台/运行时

- Web: ECMA + BOM + DOM
- Node: ECMA + Node 核心模块 +第三方 ==》舞台

**平台就是为编程语言【赋能】，让编程语言具备实际【能力】**

## Node 可以做什么？

- 高并发的请求，作为服务端的中间层，BFF
- Node 适用于开发前端方向的各种工具

## 判断一个文件是否存在

1. 利用 path.resolve(filename) 获取文件的绝对路径
2. 利用 fs.existsSync 判断该文件或文件夹是否存在
3. 利用 fs.statSync(path) 获取该文件信息
4. 利用 stat.isDirectory(),判断该文件是否是个文件夹，
5. 利用 fs.readFileSync(path) 读取文件内容

## 前端工程化的表现

- 脚手架工具开发
- 自动化构建系统
- 模块化打包
- 项目代码规范
- 自动化部署

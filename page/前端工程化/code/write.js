const fs = require("fs");
//创建可写流
let arr = [];
const ws = fs.createWriteStream("test3.txt");
ws.write("ssss写入数据");
ws.write("\n第二行");

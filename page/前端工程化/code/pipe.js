// pipe 可读流的一个方法
const fs = require("fs");

const rs = fs.createReadStream("test3.txt");
const ws = fs.createWriteStream("test4.txt");
rs.pipe(ws);

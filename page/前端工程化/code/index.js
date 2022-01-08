const fs = require("fs");
// const buf = Buffer.alloc(30); // 用于存放将来在内存里取出的东西
// fs.open("test.txt", (err, fd) => {
//   console.log(fd);
//   fs.read(fd, buf, 3, 21, 3, (err, readbytes) => {
//     console.log(buf.toString());
//   });
// });
// // write
// const buf1 = Buffer.from("拉钩教育zcegg");
// fs.open("test2.txt", "w", (err, fd) => {
//   console.log(fd);
//   fs.write(fd, buf1, 0, 6, 0, (err, wrriten) => {
//     console.log(buf1.toString());
//   });
// });

//创建可读流
let arr = [];
const rs = fs.createReadStream("test.txt");
rs.on("open", (fd) => {
  console.log(fd);
});
rs.on("data", (chunk) => {
  arr.push(chunk);
});
rs.on("end", () => {
  console.log(Buffer.concat(arr).toString());
  console.log("数据读取完了");
});

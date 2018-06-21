//http://pic.ibaotu.com/00/60/75/01J888piCPNw.mp4
const fs = require("fs");
//fs.createReadStream(path[, options])
let rs = fs.createReadStream("D:\\learning materials\\learningMaterials\\nodejs\\package.json");
let ws = fs.createWriteStream("local.json");

rs.on("open",() => {
    console.log("可读流打开了")
});
rs.on("close",() => {
    console.log("可读流关闭了");
    // ws.close();
});
// ws.on("open",() => {
//     console.log("可写流打开了")
// });
// ws.on("close",() => {
//     console.log("可写流关闭了")
// });

rs.on("data",data => {
    console.log(data.toString())
});

rs.pipe(ws);
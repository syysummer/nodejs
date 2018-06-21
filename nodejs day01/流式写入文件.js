const fs = require("fs");
//fs.createWriteStream(path[, options])
let ws = fs.createWriteStream("writeStream");
ws.write("今天学习了nodeJs感觉好难,呜呜呜");
ws.close();
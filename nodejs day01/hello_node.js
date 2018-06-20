//引入模块
let m1 = require("./module1");
let m2 = require("./module2");
console.log(m1.add(4, 5), m1.mul(4, 5));
console.log(m2.boy, m2.girl);

let obj = {
    innerObj:{

    }
};
let innerObj = obj.innerObj;
console.log(innerObj); //{ }
obj.innerObj = {
    hobby:"sing",
    eat:"chicken"
};
console.log(innerObj); //{ }
console.log(obj.innerObj); //{ hobby: 'sing', eat: 'chicken'}
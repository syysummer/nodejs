//NO1: ??
// setTimeout(()=>{
//     console.log(1);
// },0);
// let p1 = new Promise((resolve,reject) => {
//     console.log(2);
//     resolve()
// });
// p1.then(()=>{
//     console.log(3);
// }).catch((err) =>{
//     console.log(err)
// });
// console.log(4);
//2 4 3 1


//NO2: ??
// setTimeout(()=>{
//     console.log(1);
// },0);
// for(var i = 0;i <10000000000;i++){
//     i++;
// }
//promise保证执行函数立即执行
// let p1 = new Promise((resolve,reject) => {
//     console.log(2);
//     resolve();
// });
// //then的方法保证所有的同步代码执行完毕后执行。
// p1.then(()=>{
//     console.log(3);
// }).catch((err) =>{
//     console.log(err)
// });
// //同步代码
// console.log(4);
//2 4 3 1

//NO3:
// setTimeout(() => {
//     console.log('setTimeout')
// }, 0);
// setImmediate(() => {
//     console.log('setImmediate')
// });
//'setTimeout' 'setImmediate' 或者'setImmediate' 'setTimeout'

//No4:
// setTimeout(() => {
//     console.log('setTimeout')
// }, 0);
//
// setImmediate(() => {
//     console.log('setImmediate')
// });
// const start = Date.now();
// while (Date.now() - start < 10); //在此阶段setTimeout已经到时间了
// 'setTimeout' 'setImmediate'


//NO5:在 I/O Callbacks 中注册的 setTimeout 和 setImmediate，永远都是 setImmediate 先执行。
// const fs = require('fs');
// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('setTimeout')
//     }, 0);
//     setImmediate(() => {
//         console.log('setImmediate')
//     })
// });
//'setImmediate' 'setTimeout'

//NO6:
// setInterval(() => {
//     console.log('setInterval')
// }, 100);
//
// process.nextTick(function tick () {
//     process.nextTick(tick)
// });

// NO7: ???
// setTimeout(() => {
//     console.log(1)
// }, 0);
// new Promise((resolve, reject) => {
//     console.log(2);
//     for (let i = 0; i < 10000; i++) {
//         i === 9999 && resolve()
//     }
//     console.log(3)
// }).then(() => {
//     console.log(4)
// });
// console.log(5);

//NO8:
setImmediate(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2)
    }, 100);
    setImmediate(() => {
        console.log(3)
    });
    process.nextTick(() => {
        console.log(4)
    })
});
process.nextTick(() => {
    console.log(5);
    setTimeout(() => {
        console.log(6)
    }, 100);
    setImmediate(() => {
        console.log(7)
    });
    process.nextTick(() => {
        console.log(8)
    })
});
console.log(9);
//9 5 8 1 7 4 3 6 2
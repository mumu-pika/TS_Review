"use strict";
// function 函数返回值类型可以设置为void或是undefined
function add(n1, n2) {
    return n1 + n2;
}
function testVoid(num) {
    console.log('test return void: ' + num);
    return;
}
testVoid(add(2, 3));
// 下面使用回调函数callback的类型定义
function addHandler(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addHandler(10, 20, (result) => {
    console.log('执行回调函数', result);
});

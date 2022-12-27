"use strict";
// unknown 和 never
/*
  unknown和any都是TS中的顶级类型，但主要区别在于：
  使用any相当于彻底放弃了类型检查，
  而unknown类型相较于any更加严格，在执行大多数操作之前，会进行某种形式的检查。
*/
let userInput;
let username;
userInput = 123;
username = 'pika';
// 下面定义一抛出错误的函数
/*
  never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
  这意味着声明为 never 类型的变量只能被 never 类型所赋值，
  在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）
*/
// 返回值为 never 的函数可以是抛出异常的情况
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while(true) {}
}
try {
    generateError("It's a error", 404);
}
catch (e) {
    console.log(e);
}

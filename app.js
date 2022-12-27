// unknown 和 never
/*
  unknown和any都是TS中的顶级类型，但主要区别在于：
  使用any相当于彻底放弃了类型检查，
  而unknown类型相较于any更加严格，在执行大多数操作之前，会进行某种形式的检查。
*/
var userInput;
var username;
userInput = 123;
username = 'pika';
// 下面定义一抛出错误的函数
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
try {
    generateError('It\'s a error', 404);
}
catch (e) {
    console.log(e);
}

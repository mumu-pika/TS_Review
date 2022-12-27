// function 函数返回值类型可以设置为void或是undefined
function add(n1, n2) {
    return n1 + n2;
}
function testVoid(num) {
    console.log("test return void: " + num);
    return;
}
testVoid(add(2, 3));

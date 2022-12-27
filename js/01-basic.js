"use strict";
// console.log("hello TypeScript")
// 枚举类型
var Pet;
(function (Pet) {
    Pet[Pet["cat"] = 0] = "cat";
    Pet[Pet["dog"] = 1] = "dog";
    Pet[Pet["lion"] = 2] = "lion";
})(Pet || (Pet = {}));
const person = {
    name: 'saber',
    age: 16,
    hobbies: ['football', 'cooking'],
    role: [1, 'king'],
    pet: Pet.lion,
};
